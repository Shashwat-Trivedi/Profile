import React from "react";
// import myimg from "../../assets/myimg.jpeg";
import happylogo from "../../assets/happy-logo.png";
import person from "../../assets/person.png";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { motion } from "framer-motion";

const container = (delay, opacity) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },

  show: {
    opacity: opacity || 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-y-hidden gap-12 min-h-[600px] place-items-center py-20 md:py-0 overflow-x-hidden">
            {/* img section */}
            <div className="grid col-span-2 relative h-full justify-center items-center">
              <div className="w-[280px] sm:w-[400px] md:w-[450px]">
                <motion.h1
                  variants={container(0.2)}
                  initial="hidden"
                  whileInView="show"
                  className="text-4xl md:text-6xl font-bold relative z-20"
                >
                  Shashwat <br /> Trivedi.
                </motion.h1>
                <motion.div
                  variants={container(0.6)}
                  initial="hidden"
                  whileInView="show"
                  className="h-[4px] w-[80px] bg-primary ml-1 mt-4"
                ></motion.div>
                <div className="flex gap-6 mt-24 ">
                  <motion.div
                    variants={container(0.8)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <a
                      href="mailto:shashwatrivedi2005@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineEmail className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                    </a>
                  </motion.div>
                  <motion.div
                    variants={container(1)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <a
                      href="https://instagram.com/shashwatrivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                    </a>
                  </motion.div>
                  <motion.div
                    variants={container(1.2)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <a
                      href="https://linkedin.com/in/shashwattrivedi2005/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                    </a>
                  </motion.div>
                </div>
              </div>
              {/* Social Handle Section */}

              <div className="absolute -right-6 md:-right-32 -bottom-0">
                <motion.img
                  initial={{ x: -150 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  src={happylogo}
                  alt="my-image"
                  className="img-shadow scale-110 relative z-10  w-[150px] sm:w-[250px] md:w-full"
                />
              </div>
            </div>
            {/* text content section */}
            <div className="space-y-7 ">
              <motion.p
                variants={container(0.4, 0.5)}
                initial="hidden"
                whileInView="show"
                className="text-sm tracking-widest font-serif translate-y-3"
              >
                - Introduction
              </motion.p>
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                whileInView="show"
                className="text-2xl lg:text-3xl"
              >
                Frontend and Blockchain Developer,
                <br /> based in Pune.
              </motion.h1>
              <motion.p
                variants={container(0.6, 0.7)}
                initial="hidden"
                whileInView="show"
                className="text-sm leading-6 "
              >
                I’m a frontend developer with a passion for clean design and
                smooth user experiences. I specialize in building responsive,
                accessible interfaces using modern tools like React and
                Tailwind, and I enjoy making contribution in web3...
              </motion.p>
              <motion.button
                variants={container(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer"
              >
                My Story
                <FaArrowRight className="text-sm group-hover:translate-x-2  transition duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
