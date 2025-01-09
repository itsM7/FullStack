import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  //baseURL: "http://ade753b60e37f44259bb06edb9fd3092-381420277.eu-west-1.elb.amazonaws.com/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network Error" };
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post("/register", { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network Error" };
  }
};
