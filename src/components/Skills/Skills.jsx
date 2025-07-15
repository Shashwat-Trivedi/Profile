import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { MdComputer } from "react-icons/md";
import CompanyLogo from "../../assets/CompanyLogo.png";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

const skills = [
  // {
  //   id: 1,
  //   title: "Product Designer",
  //   icon: <FaBoxOpen className="text-4xl" />,
  //   delay: 0.2,
  // },
  // {
  //   id: 2,
  //   title: "Branding Designer",
  //   icon: <CiPen className="text-4xl" />,
  //   delay: 0.4,
  // },
  {
    id: 1,
    title: "Frontend Developer",
    discription: "I create beautiful and functional user interfaces.",
    icon: <MdComputer className="text-4xl" />,
    delay: 0.6,
  },
];

const Skills = () => {
  return (
    <div className="bg-gray">
      <div className="container py-10 text-white space-y-14">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 transform -translate-y-28">
          {skills.map((skill) => {
            return (
              <motion.div
                variants={fadeUp(skill.delay)}
                initial="hidden"
                whileInView="show"
                key={skill.id}
                className="flex items-center gap-6 bg-[#333646] px-7 py-12  hover:shadow-lg hover:bg-[#ffc25d]/80 hover:scale-105 duration-300 shadow-xl col-span-3 mx-auto"
              >
                {" "}
                {skill.icon}
                <div className="space-y-3">
                  <p className="text-3xl">{skill.title}</p>
                  <p>{skill.discription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Company Logo Section */}
        {/* <div>
          <img src={CompanyLogo} alt="Logo-of-company" />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
