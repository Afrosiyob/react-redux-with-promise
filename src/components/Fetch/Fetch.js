import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Fetch = (props) => {
  const { url } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const response = await axios.get(url);

      if (mounted) {
        setData(response.data);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [url]);

  if (data) {
    return <div>{data.greeting}</div>;
  } else {
    return <span>loading</span>;
  }
};

Fetch.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Fetch;
