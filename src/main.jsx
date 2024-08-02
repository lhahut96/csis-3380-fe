import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginExample from "./pages/login-copy";
import Login from "./pages/login";
import Buying from "./pages/buying";

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
    ],
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
