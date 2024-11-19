import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/HomePage.tsx";
import Login from "./views/Login/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/HomePage",
    element: <Home />,
  },
]);

export default router;
