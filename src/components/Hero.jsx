import { motion, useAnimation } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute mx-auto top-[10%] sm:top-[16%] lg:top-[2%] w-full lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-2 3xl:px-60 flex flex-col lg:flex-row">
        <div className="flex-1 lg:mb-0 top-5 left-0">
        <motion.h1
            className="font-bold text-white text-[40px] sm:text-[14px] md:mx-80 md:px-10 md:text-[35px] lg:mx-10 lg:text-[45px] 2xl:text-[60px] leading-[110px] 2xl:leading-[160px]"
            variants={fadeIn("right", "spring", 0.5, 1.5)}
            initial="hidden"
            animate="show"
          >
            Taejun Ha
        </motion.h1>
        </div>
      </div>
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
