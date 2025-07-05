import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CurrencyConverter from "../../assets/CurrencyConverter.png";
import JobSearch from "../../assets/JobSearch.png";
import JovianJobs from "../../assets/JovianJobs.png";
import { div } from "framer-motion/client";

const projectList = [
    {
        id: 1,
        title: "Job Search",
        img: JobSearch
    },
    {
        id: 2,
        title: "Jovian Jobs",
        img: JovianJobs
    },
    {
        id: 3,
        title: "Currency Change",
        img: CurrencyConverter
    }
];

const Projects = () => {
  return (
    <div className="bg-gray text-white py-14">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
          <section className="space-y-7 lg:max-w-[380px]">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Projects
            </p>
            <h1 className="text-2xl lg:text-3xl">
              All Creative Works, Selected projects
            </h1>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:shashwatrivedi2005@gmail.com")
              }
            >
              Explore More
              <FaArrowRight className="text-sm group-hover:translate-x-2  transition duration-200" />
            </button>
          </section>
          {
            projectList.map(
                (project) => {
                    return (
                        <div key={project.id} className="space-y-4 px-4 items-center justify-center">
                            <img src={project.img} alt="" className="w-full hover:scale-110 hover:shadow-lg duration-300" />
                            <p className="text-2xl font-semibold">{project.title}</p>
                        </div>
                    )
                }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
