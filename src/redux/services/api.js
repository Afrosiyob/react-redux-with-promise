const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const fetchDataApi = async (url) => {
  try {
    await delay(300);
    const response = await fetch(url);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
