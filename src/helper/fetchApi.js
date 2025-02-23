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
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProductApi = async (name = "") => {
  try {
    const response = await axiosInstance.get(`/products?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const deleteProductApi = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const addProductApi = async (data) => {
  try {
    const response = await axiosInstance.post("/products", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateProductApi = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export {
  addProductApi,
  deleteProductApi,
  getProductApi,
  getUsersApi,
  loginApi,
  registerApi,
  updateProductApi,
};
