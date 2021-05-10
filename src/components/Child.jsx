import React from "react";

import PropTypes from "prop-types";

function Child({ count }) {
  console.log(`child component consider of  count ${count} `);
  return <div>this is child component {count} </div>;
}

export default React.memo(Child);

Child.propTypes = {
  count: PropTypes.number.isRequired,
};
