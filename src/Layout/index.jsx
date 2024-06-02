import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FooterComponent from "../Components/Footer";

export default function LayoutPage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
