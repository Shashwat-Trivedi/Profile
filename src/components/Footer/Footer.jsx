import React from "react";
import Logo from "../../assets/happy-logo.png";

const Footer = () => {
  return (
    <div className="bg-darkGray text-white/50 py-14">
      <div className="container flex flex-col items-center justify-center gap-4">
        <img src={Logo} alt="happy-logo" className="w-[100px]" />
        <p className="text-center text-sm">Copyright &copy; 2025. All Right Reserved</p> 
      </div>
    </div>
  );
};

export default Footer;
