const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const fetchData = async (url) => {
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
