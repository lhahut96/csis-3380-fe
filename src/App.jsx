import { ConfigProvider } from "antd";
import Login from "./pages/Login";
import Buying from "./pages/Buying";
import { Router, Routes } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#262626",
          borderRadius: 8,
        },
        components: {
          Input: {
            activeShadow: "transparent",
          },
        },
      }}
    >
    </ConfigProvider>
  );
}

export default App;
