import { data } from "autoprefixer";
import axiosInstance from "./axios";

const registerApi = async (data) => {
  try {
    const response = await axiosInstance.post("/users/register", data);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const loginApi = async (data) => {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
};

const getUsersApi = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProductsApi = async (data) => {
  const response = await axiosInstance.get("/products", data);
  return response.data;
}

export { getUsersApi, loginApi, registerApi, getProductsApi };
