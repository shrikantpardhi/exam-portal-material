import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./UI/Footer";
import { Header } from "./UI/Header";
export const HomeTemplate = (props) => {
  return (
    <div>
      <Header
        value={props.value}
        setValue={props.setValue}
        selectedIndex={props.selectedIndex}
        setSelectedIndex={props.setSelectedIndex}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
