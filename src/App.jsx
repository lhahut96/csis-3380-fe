import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom/dist";
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
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
