import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { loginApi } from "../helper/fetchApi";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { messageApi } = useOutletContext();
  const nav = useNavigate();

  const handleLogin = async () => {
    const longinData = {
      username,
      password,
    };

    try {
      const data = await loginApi(longinData);
      localStorage.setItem("accessToken", data.token);
      messageApi.open({
        type: "success",
        content: "Success!",
      });
      nav("/buying");
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Failed: " + error.message,
      });
    }
  };

  return (
    <div className='login-page'>
      <div className='card'>
        <p>WELCOME</p>
        <Input
          placeholder='input username'
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          placeholder='input password'
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='primary' onClick={handleLogin}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
