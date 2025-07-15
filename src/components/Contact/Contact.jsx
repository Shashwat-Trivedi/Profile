import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = (delay, opacity) => ({
  hidden: {
    opacity: 0,
    y: 100,
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

const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-24 lg:pt-36 lg:pb-[150px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side Section */}
          <section className="space-y-7 lg:max-w-[380px]">
            <motion.p
              variants={fadeUp(0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm tracking-widest font-serif translate-y-3"
            >
              - Contact
            </motion.p>
            <motion.h1
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl"
            >
              Any type of Query and Discussion.
            </motion.h1>
            <motion.p
              variants={fadeUp(0.6, 0.7)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6"
            >
              Feel free to reach out for collaboration, freelance opportunities,
              or just to talk about design and development. I’m always open to
              connecting and discussing fresh ideas or solving real-world
              problems together.
            </motion.p>
            <motion.button
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer"
            >
              <a
                href="mailto:shashwatrivedi2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                Email me
                <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
              </a>
            </motion.button>
          </section>
          {/* Right Side Section */}
          <section className="space-y-7 my-auto">
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-3xl"
            >
              You can’t use up creativity — the more you code, the more you
              grow.
            </motion.p>
            <motion.p
              variants={fadeUp(0.6, 0.6)}
              initial="hidden"
              whileInView="show"
              className="text-sm leading-6"
            >
              I specialize in building responsive, accessible UIs with modern
              frameworks like React and Tailwind. Every project is a chance to
              improve, experiment, and push the boundaries of what’s possible on
              the web.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="flex gap-3 items-center"
              >
                <p className="text-6xl text-primary font-bold">0</p>
                <p className="font-semibold max-w-[100px]">
                  Years Of Experience
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp(1)}
                initial="hidden"
                whileInView="show"
                className="flex gap-3 items-center"
              >
                <p className="text-6xl text-primary font-bold">0</p>
                <p className="font-semibold max-w-[100px]">
                  Completed Projects
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
