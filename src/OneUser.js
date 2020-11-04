import React, { useEffect, Fragment } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OneUser = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable:{" "}
      {props.user.hirable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={props.user.avatar_url}
            className='round-img'
            alt=''
            style={{ width: "150px" }}
          />
          <h1>{props.user.name}</h1>
          <p>Location: {props.user.location}</p>
        </div>
        <div>
          {props.user.bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{props.user.bio}</p>
            </Fragment>
          )}
          <a href={props.user.html_url} className='btn btn-dark my-1'>
            Visit Profile
          </a>
          <ul>
            <li>
              {props.user.login && (
                <Fragment>
                  <strong>Username: </strong> {props.user.login}
                </Fragment>
              )}
            </li>
            <li>
              {props.user.company && (
                <Fragment>
                  <strong>Company: </strong> {props.user.company}
                </Fragment>
              )}
            </li>
            <li>
              {props.user.blog && (
                <Fragment>
                  <strong>Website: </strong> {props.user.blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>
          Followers: {props.user.followers}
        </div>
        <div className='badge badge-success'>
          Following: {props.user.following}
        </div>
        <div className='badge badge-danger'>
          Public Repos: {props.user.public_repos}
        </div>
        <div className='badge badge-dark'>
          Public Gist: {props.user.public_gist}
        </div>
      </div>
    </div>
  );
};

OneUser.propTypes = {
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default OneUser;
