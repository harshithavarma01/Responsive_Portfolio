import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Drowsiness Detection"
          des="In this project, I utilized the OpenCV and dlib Python libraries for face detection and facial landmark prediction. The EAR (Eye aspect ratio) is calculated to detect whether a person is drowsy, sleepy, or active, triggering an alarm 
          immediately if drowsiness is detected."
          src={projectOne}
        />
        
        <ProjectsCard
          title="Fire Detection System"
          des=" The IoT-based Fire Detection System detects fire outbreaks using NodeMCU, sensors, extinguisher, and buzzer. Upon detection, NodeMCU triggers extinguisher and buzzer, while recording and displaying real-time fire data on
           ThingSpeak for monitoring and analysis via dynamic graphs."
          src={projectThree}
        />
        <ProjectsCard
          title="TIC TAC TOE"
          des="In this project ,I created a tic tac toe game implementing various functions
           to check for winning conditions and validate user input."
          src={projectFour}
        />
        
      </div>
    </section>
  );
}

export default Projects