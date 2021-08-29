import axios from "axios";
import { getStories } from "./stories";
import { getAutocompletes } from "./autocompletes";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-AYLIEN-NewsAPI-Application-ID": process.env.REACT_APP_AYLIEN_APP_ID,
    "X-AYLIEN-NewsAPI-Application-Key": process.env.REACT_APP_AYLIEN_APP_KEY,
  },
});

export { getStories, getAutocompletes };

export default Api;
