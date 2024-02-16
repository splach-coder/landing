import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Spinner } from "../assets/svgs/svgs";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const buttonVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const CoreValue = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);

  const [rolling, setRolling] = useState(false);
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [gamOver, setGamOver] = useState(false);

  useEffect(() => {
    let rollingInterval;

    if (rolling) {
      const startRolling = () => {
        rollingInterval = setInterval(() => {
          const randomNumbers = [0];
          randomNumbers.push(Math.floor(Math.random() * 10));
          randomNumbers.push(Math.floor(Math.random() * 10));

          setNumbers(randomNumbers);
        }, 100);

        setTimeout(() => {
          setNumbers([0, 9, 0]);
          clearInterval(rollingInterval);
          setRolling(false);
          setGamOver(true);
        }, 5000);
      };

      startRolling();
    }

    return () => {
      clearInterval(rollingInterval);
    };
  }, [rolling]);

  const handleRollClick = () => {
    setRolling(true);
  };

  return (
    <section
      ref={ref}
      className="con bg-white min-h-[40vh] py-5 flex flex-col items-center">
      <header>
        <motion.h1
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={titleVariants}
          className="font-primary font-bold text-black text-xl md:text-2xl md:leading-[26px] text-center">
          {gamOver
            ? "🎉🎉🎉🎉🎉🎉"
            : "🎉 Don't Miss Out! Our Exclusive Promotion Is Here! 🎉"}
        </motion.h1>
      </header>

      {!gamOver ? (
        <main className="flex flex-col items-center">
          <motion.div
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={titleVariants}
            className="py-12 flex justify-center items-center">
            <div className={`flex items-center gap-2 text-red-500`}>
              <span className="font-primary font-bold text-2xl md:text-4xl ">
                Up to
              </span>
              {numbers.map((number, index) => (
                <span
                  className={`font-primary font-bold text-4xl px-1 py-5   ${
                    rolling ? "rolling" : ""
                  }`}
                  key={index}>
                  {number}
                </span>
              ))}
              <span className="font-primary font-bold text-2xl md:text-4xl ">
                % off
              </span>
            </div>
          </motion.div>
          <motion.button
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={buttonVariants}
            onClick={handleRollClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            disabled={rolling}
            className="px-8 py-3 bg-gradient-to-tr from-[#0F172A] to-[#13354F] font-secondary font-normal text-xl rounded-sm">
            {rolling ? (
              <Spinner addStyle={"w- 5 h-5 animate-spin"} />
            ) : (
              "Spin Now"
            )}
          </motion.button>
        </main>
      ) : (
        <main className="flex flex-col gap-12 items-center px-2 pt-20">
          <h1 className="font-primary font-bold text-3xl text-red-500 flex items-center">
            Up to <span className="text-6xl mx-5">90%</span> off
          </h1>

          <motion.button
            ref={elementRef}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 bg-gradient-to-tr from-red-500 to-red-300 font-secondary font-normal text-xl rounded-sm">
            Shop now <span className="font-primary text-xl">&rarr;</span>
          </motion.button>
        </main>
      )}
    </section>
  );
};

export default CoreValue;
