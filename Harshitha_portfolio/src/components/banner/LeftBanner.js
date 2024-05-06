import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Harshitha Varma</span>
        </h1>
        





        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A recent Computer Science graduate passionate about software development.
         Skilled in Java, Python,web development,and React, I thrive on solving problems and writing clean, efficient code. Eager to learn and grow, I'm excited about contributing my skills to innovative projects 
        and staying updated with emerging technologies. 
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner