import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="fixed top-0 left-0 cursor-default font-medium text-white text-[16px] xs:text-[15px] sm:text-[20px] md:text-[30px] 2xl:text-[50px] leading-[32px] 2xl:leading-[40px] w-full flex justify-start items-start p-2">
      <div className="flex flex-col">
        <div className="text first flex" aria-label="Full-Stack Developer">
          {produceSpans("Full-Stack Developer", "animate-textRotate1")}
        </div>
        <div className="text second flex" aria-label="Student">
          {produceSpans("Student", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
