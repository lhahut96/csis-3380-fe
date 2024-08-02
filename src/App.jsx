import { ConfigProvider, message } from "antd";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom/dist";

// import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
  const [messageApi, contextHolder] = message.useMessage();

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
      {contextHolder}
      <Outlet context={{ messageApi }} />
    </ConfigProvider>
  );
}

export default App;
