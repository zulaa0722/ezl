import axios from "../axios/axios-default";

export const fetchData = (url, param) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(url + param)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
};
