import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

export default function Homework() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}