import React from "react";

import PropTypes from "prop-types";

const Title = ({ title = "initial title" }) => {
  console.log(`custom title ${title}`);
  return <div>this is {title}</div>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
