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
    <nav>
      <div className="container flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <img src={Logo} alt="Happy-Logo" className="w-16" />
        </div>
        {/* Nav Menu Section */}
        <div>
          <ul className="flex justify-center gap-5">
            {NavMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
