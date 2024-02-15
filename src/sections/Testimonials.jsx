import React, { useState, useRef } from "react";
import { Quotations, Right, Left } from "../assets/svgs/svgs";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const cardVariants = ({ delay }) => {
  return {
    hidden: { scale: 0, translateX: 300 },
    visible: {
      scale: 1,
      translateX: 0,
      transition: { duration: 0.7, delay: delay },
    },
  };
};

const Testimonials = () => {
  const [next, setNext] = useState(0);
  const [activeCard, setActiveCard] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const cardWidth = isMobile ? 340 : 440;

  const nextClick = () => {
    if (activeCard < cards.length) {
      setNext((oldNext) => oldNext - cardWidth);
      setActiveCard((oldId) => oldId + 1);
    }
  };

  const previousClick = () => {
    if (activeCard > 1) {
      setNext((oldNext) => oldNext + cardWidth);
      setActiveCard((oldId) => oldId - 1);
    }
  };

  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <section className="firstSection min-h-[65vh] md:h-[80vh] px-3 py-10 md:py-20 overflow-hidden">
      <div ref={ref} className="flex flex-col md:grid md:grid-cols-5 gap-14 md:gap-10">
        <div className="col-span-1 hidden md:block"></div>
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={titleVariants}
          className="col-span-1">
          <h1 className="font-primary font-bold text-white text-3xl md:text-6xl md:leading-[70px] tracking-tighter">
            Trusted By 200+
            <span className="bg-white bg-opacity-30 ms-2 md:ms-0 pe-2">
              Client
            </span>
          </h1>
          <p className="font-primary text-bold text-base md:text-lg mt-2 md:mt-5 ms-5 md:ms-0">
            Don't just take our word for it.
          </p>
        </motion.div>

        <div className="col-span-3 flex gap-10 relative overflow-x-hidden">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={cardVariants(index + 1 / 10)}
              style={{
                marginLeft: card.id === 1 ? next : 0 + "px",
              }}
              className={`bg-white p-8 rounded-md min-w-[300px] max-w-[300px] h-[350px] md:min-w-[400px] md:max-w-[400px] md:h-[400px] flex flex-col gap-4 md:gap-6 ${
                activeCard === card.id ? "opacity-100" : "opacity-50"
              } ease-linear duration-200 transition-all`}>
              <header>
                <Quotations addStyle={"w-8 h-8"} />
              </header>
              <main className="font-secondary font-bold text-black text-base md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem cupiditate quam, tempore laboriosam, optio labore
                quasi ut similique animi officia delectus ad ipsa a blanditiis
                voluptas voluptatem rerum sint nobis.
              </main>
              <footer className="mt-2 text-gray-800 text-bold">
                Anamaria B
              </footer>
            </motion.div>
          ))}

          <div
            onClick={previousClick}
            className={`absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-white w-9 h-9 md:w-12 md:h-12 right-16 md:right-36 text-bold cursor-pointer text-3xl text-[#153750] ${
              activeCard === 1 ? "hidden" : "flex justify-center items-center"
            } shadow-lg`}>
            <Left addStyle={"w-10 h-10 me-1"} />
          </div>

          <div
            onClick={nextClick}
            className={`absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-white w-9 h-9 md:w-12 md:h-12 right-2 md:right-20 text-bold cursor-pointer text-3xl text-[#153750] ${
              activeCard === cards.length
                ? "hidden"
                : "flex justify-center items-center"
            } shadow-lg`}>
            <Right addStyle={"w-10 h-10"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
