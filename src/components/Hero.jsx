import { motion, useAnimation } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Slide from "../components/Slide";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[1%] sm:top-[10%] lg:top-[9%] w-full flex flex-col lg:flex-row lg:left-[10%] md:left-[10%] sm:left-[5%]">
        <div className="flex-1 lg:mb-0 top-5 lg:left-[40%]">
        <motion.h1
            className="font-bold text-white text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] 2xl:text-[90px] leading-[110px] 2xl:leading-[160px] "
            variants={fadeIn("down", "spring", 0.5, 1.5)}
            initial="hidden"
            animate="show"
          >
            Taejun Ha
        </motion.h1>
        </div>
      </div>
      <Slide/>
      <img className="parallax_front" src="./parallax/ft.svg" alt="" />
      <img className="parallax_hill" src="./parallax/mt.svg" alt="" />
      <img className="parallax_sky" src="./parallax/skyline.svg" alt="" />
      <img className="parallax_mountain" src="./parallax/mountain.svg" alt="" />
      <img className="parallax_stars" src="./parallax/str.svg" alt="" />
      <img className="parallax_bg" src="./parallax/bg.svg" alt="" />
    </section>
  );
};

export default Hero;
