import React from "react";
import PropTypes from "prop-types";
import Repo from "./Repo";

const Repos = ({ repos }) => {
  let display = repos.map((repo) => <Repo repo={repo} key={repo.id} />);

  return repos.length > 0 ? display : null;
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
