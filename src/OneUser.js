import React, {useEffect} from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OneUser = (props) => {

  useEffect(() => {
    props.getUser(props.match.params.login)
  }, [])

  if (props.loading) {
    return <Spinner />
  }

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable: {' '}
      {props.user.hirable? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger"/>}
    </div>
  );
};

OneUser.propTypes = {
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

export default OneUser;