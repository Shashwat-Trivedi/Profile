import React from "react";
import Logo from "../../assets/happy-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavMenu = [
  {
    id: 1,
    title: "Contact",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Works",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="py-8 bg-gray text-white">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Happy-Logo" className="w-[80px]" />
          </div> 
          {/* Nav Menu Section */}
          <div>
            <ul className="hidden md:flex justify-center gap-10">
              {NavMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link} 
                    className="text-xl font-semibold text-white/70 hover:text-[#ffc25d]">{item.title}</a>
                  </li>
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
