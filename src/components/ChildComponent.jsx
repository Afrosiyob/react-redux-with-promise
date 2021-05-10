import React, { memo } from "react";
import PropTypes from "prop-types";

const ChildComponent = ( props ) => {
  const { title = "custom title", array } = props;

  console.log( "CHILDREN COMPONENT" );
  console.log( array );

  return <div>Child component { title } </div>;
};

ChildComponent.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
};

export default memo( ChildComponent );
