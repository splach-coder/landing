import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Spinner } from "../../assets/svgs/svgs";
import "../../assets/styles/roller.css";

const Modal = ({ modal, closeModal }) => {
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
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-hidden ${
        modal ? "flex" : "hidden"
      } justify-center items-center `}>
      <motion.main
        initial={{ scale: 0 }}
        animate={{ scale: modal ? 1 : 0 }}
        transition={{
          duration: 0.3,
        }}
        className="relative px-5 mx-5 md:mx-0 md:px-20 py-10 bg-white rounded-md ">
        <span
          className="absolute top-2 right-2 font-primary text-2xl text-black bg-black bg-opacity-30 w-[30px] h-[30px] rounded-[50%] cursor-pointer flex justify-center items-center"
          onClick={closeModal}>
          &times;
        </span>
        <header>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="font-primary font-bold text-black text-xl md:text-2xl md:leading-[26px] text-center">
            {gamOver
              ? "🎉🎉🎉🎉🎉🎉"
              : "🎉 Don't Miss Out! Our Exclusive Promotion Is Here! 🎉"}
          </motion.h1>
        </header>

        {!gamOver ? (
          <main className="flex flex-col items-center">
            <div className="py-12 flex justify-center items-center">
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
            </div>
            <motion.button
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
          <main className="flex flex-col gap-12 items-center px-10 md:px-0 pt-20">
            <h1 className="font-primary font-bold text-3xl md:text-6xl text-red-500">
              Up to 90% off
            </h1>

            <motion.button
              onClick={handleRollClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 bg-gradient-to-tr from-red-500 to-red-300 font-secondary font-normal text-xl rounded-sm">
              Shop now <span className="font-primary text-xl">&rarr;</span>
            </motion.button>

            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>

            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </main>
        )}
      </motion.main>
    </div>
  );
};

export default Modal;
