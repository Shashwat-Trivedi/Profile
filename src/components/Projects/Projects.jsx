import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CurrencyConverter from "../../assets/CurrencyConverter.png";
import ReWear from "../../assets/ReWear.png";
import PasswordGenerator from "../../assets/PasswordGenerator.png";
import { motion } from "framer-motion";

const fadeUp = (delay, opacity) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: opacity || 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

const projectList = [
  {
    id: 1,
    title: "ReWear",
    img: ReWear,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Password Generator",
    img: PasswordGenerator,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Currency Change",
    img: CurrencyConverter,
    delay: 0.6,
  },
];

const Projects = () => {
  return (
    <div className="bg-gray text-white pb-36">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
          <section className="space-y-7 lg:max-w-[380px]">
            <motion.p
              variants={fadeUp(0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm tracking-widest font-serif translate-y-3"
            >
              - Projects
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              All Creative Works, Selected projects
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6, 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              className="text-sm leading-6"
            >
              These works reflect my focus on performance, creativity, and
              user-first design principles.
            </motion.p>
            <motion.button
              variants={fadeUp(0.8)}
              initial={"hidden"}
              whileInView={"show"}
              className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:shashwatrivedi2005@gmail.com")
              }
            >
              Explore More
              <FaArrowRight className="text-sm group-hover:translate-x-2  transition duration-200" />
            </motion.button>
          </section>
          {projectList.map((project) => {
            return (
              <motion.div
                variants={fadeUp(project.delay)}
                initial="hidden"
                whileInView="show"
                key={project.id}
                className="space-y-4 px-4 mb-8 items-center justify-center"
              >
                <img
                  src={project.img}
                  alt=""
                  className="w-full hover:scale-110 hover:shadow-lg duration-300"
                />
                <p className="text-2xl font-semibold">{project.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
