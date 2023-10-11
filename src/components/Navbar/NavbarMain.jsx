import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 left-0 right-0 duration-100 ease-in ${
        scrolled ? "bg-[#FEEBFF]" : ""
      }`}
    >
      <Navbar />
    </div>
  );
};

export default NavbarMain;
