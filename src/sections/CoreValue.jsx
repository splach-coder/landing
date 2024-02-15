import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, translateX: 100 },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.7, delay: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, translateX: -100 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.7 } },
};

const CoreValue = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const elementRef = useRef(null);

  return (
    <section className="con bg-white h-[40vh] flex justify-center items-center">
      <div ref={ref} className="flex flex-col justify-center items-center">
        <motion.div
           
          className="px-20 py-5 flex gap-7">
          <span className="font-primary font-bold text-black text-2xl md:text-[40px] tracking-tighter text-center">
            Our Commitment to Your Success
          </span>
        </motion.div>

        <motion.p
          className="text-gray-800 font-normal text-base md:text-lg text-center"
          ref={elementRef}
          initial="hidden"
          animate={inView ? "visible" : ""}
          variants={textVariants}>
          Integrity, transparency, and innovation are at our core. These values
          guide every <br /> decision we make, ensuring our products are safe,
          effective, and tailored to your needs.
          <br /> Trust us to be your partner on your journey to a healthier,
          happier you.
        </motion.p>
      </div>
    </section>
  );
};

export default CoreValue;
