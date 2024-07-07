import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Intro = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const whileHoverEffect = window.innerWidth >= 765 ? { scale: 1.05 } : {}; // prevent hover on small screen

  return (
    <div ref={ref} className="md:m-6 md:px-6 flex flex-col sm:flex-row gap-4 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-white md:px-10 lg:px-20 2xl:px-32 py-10 2xl:py-25 relative z-0"
      >
        <motion.h1
          className="text-white font-bold px-5 md:text-[80px] sm:text-[50px] text-[40px] underline"
          variants={textVariant(0.3)}
        >
          About Me
        </motion.h1>
        <motion.p className="text-lg mt-10 px-5" variants={textVariant(0.4)}>
        Hello, I'm Taejun Ha! Currently, I'm a 4th-year Computer Science student at the University of Western Ontario. 
        When I'm not immersed in my studies or coding away, you'll likely find me engaging in activities like running, playing volleyball, 
        watching hockey, gaming, or eating. I have a passion for travel, so feel free to explore some of the amazing places I've visited below! 
        Additionally, don't miss out on checking out the projects I've worked on. If you'd like to learn more about me or just have a chat, 
        please don't hesitate to reach out. I'd love to connect!
        </motion.p>
        <motion.p className="text-lg mt-10 px-5" variants={textVariant(0.5)}>
          Some courses I have taken at Western include data structures and algorithms, databases, introduction to software engineering, 
          object-oriented design and analysis.
        </motion.p>

        <motion.div
          whileHover={ whileHoverEffect }
          transition={{ type: "spring", stiffness: 300 }}
        className="mt-10 bg-gray-800 p-4 rounded-lg shadow-md max-w-3xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={fadeIn("up", "spring", 0.6, 1)}
        >
          <motion.h2 className="text-2xl font-bold mb-4 decoration-solid" variants={textVariant(0.7)}>
            Education & Experience
          </motion.h2>
          <motion.h3 className="text-xl font-semibold" variants={textVariant(0.8)}>
            University of Western Ontario
          </motion.h3>
          <motion.p className="text-gray-300" variants={textVariant(0.9)}>Bachelor of Science in Computer Science</motion.p>
          <motion.h3 className="text-xl font-semibold mt-4" variants={textVariant(1)}>
            Technologies & Frameworks
          </motion.h3>
          <motion.ul className="text-gray-300 list-disc list-inside" variants={textVariant(1.1)}>
            <li>Java</li>
            <li>JavaScript (React, Node.js, Next.js)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C</li>
            <li>CSS / TailwindCSS</li>
          </motion.ul>
          <motion.h3 className="text-xl font-semibold mt-4" variants={textVariant(1.2)}>
            Tools & Platforms
          </motion.h3>
          <motion.ul className="text-gray-300 list-disc list-inside" variants={textVariant(1.3)}>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GitHub</li>
            <li>BitBucket</li>
            <li>Confluence</li>
            <li>Jira</li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Intro, "intro");
