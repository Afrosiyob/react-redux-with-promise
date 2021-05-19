import React, { useState } from "react";

const Form = (props) => {
  const { username, password } = props;

  const [values, setValues] = useState({
    username: username || "",
    password: password || "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <>
      <form>
        <label htmlFor="username"> Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={inputChange}
        />
        <br />
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={inputChange}
        />
        <br />

        <button onClick={handleSubmit}> Submit </button>
      </form>
    </>
  );
};

export default Form;
