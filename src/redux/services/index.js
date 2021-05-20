// apiServices.js

import axios from "axios";

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const fetchData = async (someUrl) => {
  await delay(300);
  await axios
    .get(someUrl)
    .then((res) => ({ res }))
    .catch((err) => ({ err }));
};
