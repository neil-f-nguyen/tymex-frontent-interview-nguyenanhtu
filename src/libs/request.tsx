import axios from "axios";

const request = axios.create({
  headers: {
    "content-type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default request;
