import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[1%] sm:top-[15%] lg:top-[9%] w-full flex flex-col items-center justify-center sm:right-[5%] md:right-[5%] lg:right-[17%] 2xl:right-[25%]">
        <div className="flex-1 lg:mb-0 top-5">
          <motion.div
            className="font-bold text-white"
            variants={fadeIn("down", "spring", 0.5, 1.5)}
            initial="hidden"
            animate="show"
          >
            <h1 className="name__ha justify-center text-center font-bold text-white text-[40px] sm:text-[40px] md:text-[60px] lg:text-[70px] 2xl:text-[90px] leading-[110px] 2xl:leading-[160px]">
              Hi, I'm Taejun Ha
            </h1>
            <div className="roller">
              <span id="rolltext" className="block sm:text-[30px] md:text-[35px] lg:text-[60px] 2xl:text-[60px]">
                Software developer<br />
                Blackhawks fan<br />
                Traveller<br />
                Runner<br />
              </span>
              <br />
            </div>
          </motion.div>
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
