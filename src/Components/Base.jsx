import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Base() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Base;
