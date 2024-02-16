import React from "react";
import Popup from "reactjs-popup";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const ImageSlider = ({ isOpen, closePopup, img }) => {
  return (
    <Popup
      overlayStyle={{ background: "rgba(0, 0, 0, .8)" }}
      open={isOpen}
      onClose={closePopup}
      modal
      nested>
      {(close) => (
        <motion.div
          variants={container}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-[340px] sm:w-[390px] bg-[#fff] text-black rounded-md p-2 flex flex-col items-center gap-5 shadow-2xl  ">
          <button onClick={close} className="text-2xl text-secondary ms-auto">
            &times;
          </button>

          <img src={img} alt="image" />
        </motion.div>
      )}
    </Popup>
  );
};

export default ImageSlider;
