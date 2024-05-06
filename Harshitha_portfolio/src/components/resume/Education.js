import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech"
            subTitle="Keshav Memorial Institute Of Technology (2021 - 2024)"
            result="8.9/10"
            des="Jawaharlal Nehru Technological University(JNTU)"
          />
          <ResumeCard
            title="Diploma(polytechnic)"
            subTitle="T.R.R Colllege Of Technology(Polytechnic)2018-2021)"
            result="9.6/10"
            des="State Board Of Technical Education(SBTET)"
          />
          <ResumeCard
            title="School Education"
            subTitle="S.G.V.M Hight School(2007-2018)"
            result="8.5/10"
            des="State Board Of Secondary Education(SSC)"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education