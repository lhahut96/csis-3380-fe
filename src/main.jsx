import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginExample from "./pages/login-copy";

import Buying from "./pages/Buying.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login-example",
        element: <LoginExample />,
      },
      {
        path: "buying",
        element: <Buying />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
