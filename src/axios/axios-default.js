import axios from "axios";
const myBaseURL = axios.create({
  baseURL: "http://172.16.10.71/1/",
});

export default myBaseURL;
