import React from "react";
import Logo from "../../assets/happy-logo.png";

const NavMenu = [
  {
    id: 1,
    title: "Services",
    link: "#",
  },
  {
    id: 2,
    title: "Works",
    link: "#",
  },
  {
    id: 3,
    title: "Blogs",
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

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
