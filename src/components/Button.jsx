import React from "react";

import PropTypes from "prop-types";

const Button = ({ btnTitle = "initial button title" }) => {
  console.log(`custom btn ${btnTitle}`);

  return <button>add {btnTitle}</button>;
};

export default React.memo(Button);

Button.propTypes = {
  btnTitle: PropTypes.string.isRequired,
};
