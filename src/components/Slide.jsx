import { motion, useAnimation } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Slide = ({ scrollContainer }) => {
  return (
    <section className="slide text-white md:text-[25px] lg:top-[15%] md:top-[12%] sm:top-[45%] lg-text[30px] xl-text[35px]"> 
        <motion.h1
            variants={fadeIn("left", "spring", 0.8, 2)}
            initial="hidden"
            animate="show"
          >
        <div class="item item1">Software Developer</div>
        <div class="item item2">Traveller</div>
        <div class="item item3">Student</div>
        <div class="item item4">Blackhawks Fan</div>
        <div class="item item5">Runner</div>
        <div class="item item6"></div>
      </motion.h1>
    </section>
  );
};

export default Slide;
