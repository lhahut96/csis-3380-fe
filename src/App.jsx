import { ConfigProvider, message } from "antd";
import { Outlet } from "react-router-dom/dist";

// import "./App.css";

function App() {
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
      { contextHolder }
      <Outlet context={{ messageApi }}/>
    </ConfigProvider>
  );
}

export default App;
