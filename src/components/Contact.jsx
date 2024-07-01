import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden text-center">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>
        <p className="text-white text-center">If you want to ever chat, feel free to contact me through e-mail or LinkedIn!</p>
        <div className="flex mt-8 space-x-4 items-center justify-center">
          <a
            href="https://github.com/taejunha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white py-2 px-4 rounded"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/taejun-ha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hataejun24@gmail.com"
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Email
          </a>
        </div>
        <footer className="text-gray-500 p-10">Created by Taejun Ha</footer>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
