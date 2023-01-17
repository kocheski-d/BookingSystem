import axios from "axios";

export const apiData = axios.create({
    baseURL: "http://localhost:5204/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});
  
