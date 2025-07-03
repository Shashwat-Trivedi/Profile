import React from "react";
import person from "../../assets/person.png";
import { FaArrowRight } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[600px] place-items-center py-20 md:py-0">
            {/* img section */}
            <div className="grid col-span-2 relative h-full justify-center items-center">
              <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                <h1 className="text-4xl md:text-6xl font-bold relative z-20">
                  Shashwat <br/> Trivedi.
                </h1> 
                <div className="h-[4px] w-[30px] bg-primary mt-4"></div>
                <div className="flex gap-6 mt-24 ">
                  <FaDribbble className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                  <FaLinkedinIn className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                </div>
              </div>
              {/* Social Handle Section */}

              <div className="absolute -right-6 md:-right-32 -bottom-0">
                <img
                  src={person}
                  alt="my-image"
                  className="scale-110 relative z-10  w-[150px] sm:w-[250px] md:w-full"
                />
              </div>
            </div>
            {/* text content section */}
            <div className="space-y-7 ">
              <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                - Introduction
              </p>
              <h1 className="text-2xl lg:text-3xl">
                Frontend Developer,
                <br /> based in Pune.
              </h1>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nihil dolor pariatur odit corporis vero praesentium nam, fuga
                minima incidunt temporibus cumque soluta dolorum asperiores!.
              </p>
              <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer">
                My Story
                <FaArrowRight className="text-sm group-hover:translate-x-2  transition duration-200" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
