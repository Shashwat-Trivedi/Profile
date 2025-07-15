import React from "react";
import Logo from "../../assets/happy-logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-darkGray text-white/50 py-14">
      <div className="container flex flex-col items-center justify-center gap-4">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={Logo}
          alt="happy-logo"
          className="w-[100px]"
        />
        <motion.p 
        initial={{  scale: 0 }}
          whileInView={{  scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center text-md">
          Copyright &copy; 2025. All Right Reserved
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
