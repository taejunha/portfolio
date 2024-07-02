import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  link,
  description,
  image,
  techstack,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <a id="portfolio" href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn("right", "spring", index * 0.2, 1)}
        whileHover={{ scale: 1.05 }}
        className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5 bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer`}
      >
        <div className='relative w-full md:w-3/5'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-auto object-cover md:rounded-3xl'
          />
        </div>

        <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
          <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
          <p className='text-white mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
          <p className='text-gray-400 mt-1 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-10px'>{techstack}</p>
        </div>
      </motion.div>
    </a>
  );
};
const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
        <p className="text-white text-lg">These are some of the projects I have worked on. Just click the project to learn more about it!</p>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
