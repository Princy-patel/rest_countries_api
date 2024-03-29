import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./Components/Base";
import Details from "./Components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "/",
        element: <Countries />,
      },

      {
        path: "country/:countries",
        element: <Details />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
