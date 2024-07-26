import { ConfigProvider, DatePicker } from "antd";
import Login from "./pages/login";
// import "./App.css";

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#262626',
        borderRadius: 8,
      },
      components: {
        Input: {
          activeShadow: "transparent"
        }
      }
    }}
  >
      <Login />
    </ConfigProvider>
  );
}

export default App;
