import React from "react";
import {
  Facebook,
  Instagram,
  Tiktok,
  Twitter,
} from "../../assets/svgs/socialMedia";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer-bg py-10">
      <div className="con flex flex-col gap-10">
        <div className="flex justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-secondary font-normal text-xl leading-[26px]">
              <span className="font-bold">T</span>rim
              <span className="font-bold">D</span>own
            </motion.span>
          </div>

          <nav></nav>

          <div className="flex gap-5">
            <div className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Facebook addStyle={"w-5 h-5"} />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Instagram addStyle={"w-6 h-6"} />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Twitter addStyle={"w-4 h-4"} />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-30 rounded-[50%] cursor-pointer hover:bg-[#153750] transition-colors ease-in flex justify-center items-center">
              <Tiktok addStyle={"w-5 h-5"} />
            </div>
          </div>
        </div>

        <div className="w-full bg-white opacity-40 h-[1px]"></div>

        <div className="text-center">
          © Copyright 2024, All Rights Reserved by
          <span className="font-bold">T</span>rim
          <span className="font-bold">D</span>own
        </div>
      </div>
    </footer>
  );
};

export default Footer;
