import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Fetch = (props) => {
  const { url = "some url" } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios.get(url);

      if (mounted) {
        setData(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (data) {
    return (
      <>
        <h1>Fetch component</h1>
        {data.greeting}
      </>
    );
  } else {
    return (
      <>
        <h1>Fetch component</h1>
        <p>no data</p>
      </>
    );
  }
};

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Fetch;
