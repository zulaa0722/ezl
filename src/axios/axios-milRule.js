import axios from "axios";
const myBaseURL = axios.create({
  baseURL: "http://10.10.11.13/military-rule/",
});

export default myBaseURL;
