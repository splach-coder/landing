import React, { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import "./assets/styles/section.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Hero from "./sections/Hero";
import Calculator from "./sections/calculator";
import Testimonials from "./sections/Testimonials2";
import Products from "./sections/Products";
import CoreValue from "./sections/CoreValue";

import ImageModal from "./components/Modal/imageModal";
import { useMediaQuery } from "react-responsive";

import { Up } from "./assets/svgs/svgs";

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const buttonVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.7, delay: 0.2 },
  },
};

function App() {
  const [imageModal, setImageModal] = useState(null);
  const [imageInModal, setImageInModal] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    if (imageModal === false)
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
  }, [imageModal]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openImageModal = (img) => {
    setImageModal(true);
    setImageInModal(img);
  };

  const closeImageModal = () => {
    setImageModal(false);
  };

  return (
    <div
      className={`relative bg-white  ${
        imageModal ? "h-screen overflow-hidden" : ""
      }`}>
      <Hero />
      <iframe
        className="absolute left-[50%] translate-x-[-50%] top-[65vh] sm:top-[60vh] md:top-[80vh] md:border-[15px] border-white rounded-md md:shadow-md shadow-gray-500 w-full h-[300px] md:w-[750px] md:h-[400px] p-3 md:p-0"
        src="https://www.youtube-nocookie.com/embed/Y6JrvphGLaY?si=f53o93NnO1ZO3I60"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        title="youtube video about my product"
        allowFullScreen></iframe>
        
      <Products openModal={openImageModal} />

      {isMobile ? <Calculator /> : ""}

      {isMobile ? <CoreValue /> : ""}

      {isMobile ? <Testimonials /> : ""}

      {isMobile ? (
        <section className="h-[30vh] bg-white flex justify-center items-center">
          <div
            ref={ref}
            className="con flex flex-col gap-8 justify-center items-center">
            <motion.h1
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={titleVariants}
              className="font-primary text-black text-2xl md:text-[40px] tracking-tighter text-center leading-10">
              May your{" "}
              <span className="font-bold py-3 px-4 rounded-md bg-gradient-to-r from-white to-[#153750] bg-opacity-50 ">
                weight loss
              </span>{" "}
              be swift and enjoyable.
            </motion.h1>
            <motion.button
              ref={elementRef}
              initial="hidden"
              animate={inView ? "visible" : ""}
              variants={buttonVariants}
              className="bg-[#153750] py-1 px-5 md:px-7 rounded-full"
              title="goup">
              <a href="#hero" aria-label="go to the top">
                <Up addStyle={"w-10 h-10"} />
              </a>
            </motion.button>
          </div>
        </section>
      ) : (
        ""
      )}

      <Footer />
      <ImageModal
        modal={imageModal}
        closeModal={closeImageModal}
        img={imageInModal}
      />
    </div>
  );
}

export default App;
