import React from "react";
import PropTypes from "prop-types";

const Hello = (props) => {
  const { name } = props;

  if (name) {
    return <h3 data-testid="hello-1"> Hello, {name} </h3>;
  } else {
    return <span data-testid="hello-1"> Hi, stranger </span>;
  }
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
