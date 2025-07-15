import React from "react";
import Logo from "../../assets/happy-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const NavMenu = [
  {
    id: 1,
    title: "Contact",
    link: "#contact",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Services",
    link: "#contact",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Works",
    link: "#projects",
    delay: 0.6,
  },
];

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Navbar = () => {
  return (
    <>
      <nav className="py-6 bg-gray text-white">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={Logo}
              alt="Happy-Logo"
              className="w-[80px]"
            />
          </div>
          {/* Nav Menu Section */}
          <div>
            <ul className="hidden md:flex justify-center gap-10">
              {NavMenu.map((item) => {
                return (
                  <motion.li
                    variants={container(item.delay)}
                    initial="hidden"
                    whileInView="show"
                    key={item.id}
                  >
                    <a
                      href={item.link}
                      className="text-2xl font-semibold text-white/70 hover:text-[#ffc25d]"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* mobile hamburger menu */}
            <div className="md:hidden">
              <GiHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
