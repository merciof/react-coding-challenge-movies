import axios from "axios";

const API_URL =
  "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

const dataService = {
  get: () => axios.get(API_URL)
};

export default dataService;
