import { Input, Button } from "antd";
import "./login.css";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

const login = () => (
  <div className="login-page">
    <div className="card">
      <p>WELCOME</p>
      <Input placeholder="input username" prefix={<UserOutlined />}/>
      <Input.Password placeholder="input password" prefix={<LockOutlined />}/>
      <Button type="primary">Sign in</Button>
    </div>
  </div>
);

export default login;
