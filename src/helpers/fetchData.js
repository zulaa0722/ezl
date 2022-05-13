import axios from "../axios/axios-default";
import axiosMilRule from "../axios/axios-purchase";

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

// export const articlesChildren = (url, param) => {
//   const promise = new Promise((resolve, reject) => {
//     axiosMilRule
//       .get(url + param)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
//   return promise;
// };
