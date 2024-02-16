import React, { useState, useRef } from "react";
import { Quotations, Right, Left, Add } from "../assets/svgs/svgs";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/aaa.png";

import PopUp from "../components/Popup/Popup";
import ImageSlider from "../components/imageSlider/imageSlider";

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
  const [isOpen, setIsOpen] = useState(false);
  const [imgIsOpen, setImgIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

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

  const openPopup = (id) => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const openImgPopup = (id) => {
    setImgIsOpen(true);
  };

  const closeImgPopup = () => {
    setImgIsOpen(false);
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
    <section
      ref={ref}
      className="firstSection min-h-[65vh] md:h-[80vh] px-3 py-10 md:py-20 overflow-hidden flex flex-col gap-10">
      <header>
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
      </header>

      <main className="flex flex-col gap-10">
        <div className="flex gap-10 relative overflow-x-hidden">
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
              className={`bg-white p-8 rounded-md min-w-[300px] max-w-[300px] h-[340px] md:min-w-[400px] md:max-w-[400px] md:h-[400px] flex flex-col gap-6 md:gap-6 ${
                activeCard === card.id ? "opacity-100" : "opacity-50"
              } ease-linear duration-200 transition-all`}>
              <header>
                <Quotations addStyle={"w-8 h-8"} />
              </header>
              <main className="font-secondary font-bold text-black text-base md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem cupiditate quam.
              </main>
              <div className="flex gap-1">
                <div className="w-10 h-10 border border-black rounded-sm cursor-pointer">
                  <img
                    onClick={() => {
                      setCurrentImg(img4);
                      setImgIsOpen(true);
                    }}
                    src={img4}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 border border-black rounded-sm cursor-pointer">
                  <img
                    onClick={() => {
                      setCurrentImg(img1);
                      setImgIsOpen(true);
                    }}
                    src={img1}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 border border-black rounded-sm cursor-pointer">
                  <img
                    onClick={() => {
                      setCurrentImg(img2);
                      setImgIsOpen(true);
                    }}
                    src={img2}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-10 h-10 border border-black rounded-sm cursor-pointer">
                  <img
                    onClick={() => {
                      setCurrentImg(img3);
                      setImgIsOpen(true);
                    }}
                    src={img3}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 border border-black rounded-sm cursor-pointer bg-black opacity-50 pb-6 flex justify-center items-center text-4xl text-white">
                  ...
                </motion.div>
              </div>
              <footer className="mt-2 text-gray-800 text-bold">
                Anamaria B
              </footer>
            </motion.div>
          ))}

          <div
            onClick={previousClick}
            className={`absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-white w-9 h-9 md:w-12 md:h-12 right-16 md:right-36 text-bold cursor-pointer text-3xl text-[#153750] ${
              activeCard === 1 ? "hidden" : "flex justify-center items-center"
            } shadow-2xl shadow-black`}>
            <Left addStyle={"w-10 h-10 me-1"} />
          </div>

          <div
            onClick={nextClick}
            className={`absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-white w-9 h-9 md:w-12 md:h-12 right-2 md:right-20 text-bold cursor-pointer text-3xl text-[#153750] ${
              activeCard === cards.length
                ? "hidden"
                : "flex justify-center items-center"
            } shadow-2xl shadow-black`}>
            <Right addStyle={"w-10 h-10"} />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          name="addreviewbtn"
          onClick={openPopup}
          className="font-bold text-lg cursor-pointer border rounded-sm border-white px-6 py-3 bg-white hover:text-[#0F182B] transition-colors ease-linear duration-200 w-[150px] mx-auto flex justify-center">
          <Add addStyle={"w-7 h-7"} />
        </motion.button>
      </main>

      <PopUp isOpen={isOpen} closePopup={closePopup} />
      <ImageSlider isOpen={imgIsOpen} closePopup={closeImgPopup} img={currentImg} />
    </section>
  );
};

export default Testimonials;
