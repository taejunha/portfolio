const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[2%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row">
        <div className="flex-1 lg:mb-0 top-5 left-0">
          <h1 className="font-medium text-white text-[40px] sm:text-[28px] md:text-[35px] lg:text-[45px] 2xl:text-[60px] leading-[110px] 2xl:leading-[160px]">
            Taejun Ha
          </h1>
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
