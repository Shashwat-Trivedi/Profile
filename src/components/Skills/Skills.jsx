import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { MdComputer } from "react-icons/md";
import CompanyLogo from "../../assets/CompanyLogo.png";

const skills = [
  {
    id: 1,
    title: "Product Designer",
    icon: <FaBoxOpen className="text-4xl" />,
  },
  {
    id: 2,
    title: "Branding Designer",
    icon: <CiPen className="text-4xl" />,
  },
  {
    id: 3,
    title: "Web Developer",
    icon: <MdComputer className="text-4xl" />,
  },
];

const Skills = () => {
  return (
    <div className="bg-gray">
      <div className="container py-10 text-white space-y-14">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex items-center gap-6 bg-white/15 px-7 py-12 max-w-[300px] hover:shadow-lg hover:bg-[#ffc25d]/80 hover:scale-105 duration-300"
              >
                {skill.icon}
                <div className="space-y-3">
                  <p className="text-3xl">{skill.title}</p>
                  <p>{skill.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Company Logo Section */}
        <div>
          <img src={CompanyLogo} alt="Logo-of-company" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
