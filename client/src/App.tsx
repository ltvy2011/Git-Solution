import React from "react";
import router from "./router.tsx";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import ajack from "./lib/AJACK/index.js";

function App() {
  ajack.get();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
