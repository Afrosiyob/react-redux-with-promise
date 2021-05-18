import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  const { number = 0 } = props;

  const [count, setCount] = useState(number || 0);

  const decrementAction = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementAction = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Fragment>
      count {count}
      <button onClick={decrementAction}> decrement </button>
      <button onClick={incrementAction}> increment </button>
    </Fragment>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
};

export default Counter;
