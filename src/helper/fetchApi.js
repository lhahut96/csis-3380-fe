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
  try {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getUsersApi = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { getUsersApi, loginApi, registerApi };
