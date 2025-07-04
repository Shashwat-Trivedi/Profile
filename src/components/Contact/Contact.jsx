import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
      <div
        className="container py-24 lg:py-36
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side Section */}
          <section className="space-y-7 lg:max-w-[380px]">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              - Contact
            </p>
            <h1 className="text-2xl lg:text-3xl">
              Any type of Query and Discussion.
            </h1>
            <p className="text-sm leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              nihil dolor pariatur odit corporis vero praesentium.
            </p>
            <button
              className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:shashwatrivedi2005@gmail.com")
              }
            >
              Email me
              <FaArrowRight className="text-sm group-hover:translate-x-2  transition duration-200" />
            </button>
          </section>
          {/* Right Side Section */}
          <section className="space-y-7">
            <p className="text-3xl">
              You can"t use up creativity, the more you use, the more you have
              in your significant mind.
            </p>
            <p className="text-sm leading-6 opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum sint minus ipsa harum dolore saepe distinctio
              blanditiis eligendi quidem similique error architecto voluptas
              nisi, optio ut molestias impedit dolores! Excepturi.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 items-center">
                    <p className="text-6xl text-primary font-bold">
                        1+
                    </p>
                    <p className="font-semibold max-w-[100px]">
                        Years Of Experience
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-6xl text-primary font-bold">
                        12+
                    </p>
                    <p className="font-semibold max-w-[100px]">
                        Completed Projects
                    </p>
                </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
