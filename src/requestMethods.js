import axios from "axios";

const BASE_URL ="http://localhost:5000/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWZmNjcxMDg4ZmI5ZWMzZmFlZWE4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDY5MTQ2NywiZXhwIjoxNjgwOTUwNjY3fQ.uhgSoYme8FyrzEHqbktb1WECICHqSwzDXJB91BUpfkU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });