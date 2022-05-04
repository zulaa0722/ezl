import axios from "axios";
const myBaseURL = axios.create({
  baseURL: "http://172.16.10.71/military-rule/",
});

export default myBaseURL;
