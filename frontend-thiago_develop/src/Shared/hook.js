import axios from "axios";

const hook = axios.create({
  baseUrl: 'https://localhost:8080'
});

export default hook;