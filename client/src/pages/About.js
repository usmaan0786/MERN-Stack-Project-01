import React, { } from "react";
import UserImage from "../Images/kTKo7BB8c.png";
import { } from "react-router-dom";

const About = () => {

  return (
    <div className="shadow-md shadow-[#c5c5c5] flex mx-auto rounded-md flex-col text-[#363636] mt-[5rem] p-[3rem] w-max">
      <form
        method="GET"
        className="flex  flex-col items-center mt-[.5rem] mb-[3rem]"
      >
        <div className="flex mb-[2rem] items-center justify-arround  w-[100%]">
          <img className="w-[12rem]" src={UserImage} alt="UserImage" />
          <h1 className="text-[#924eff] text-[2.5rem] font-extrabold pl-[5rem]">
            Usman Manzoor
          </h1>
        </div>
        <div className="flex items-center gap-x-[10rem]">
          <div className="flex text-[1.2rem] gap-x-[10rem] flex-col gap-y-[2rem]">
            <p className="text-[#924eff] font-medium">UserID:</p>
            <p className="text-[#924eff] font-medium">User Name:</p>
            <p className="text-[#924eff] font-medium">Email:</p>
            <p className="text-[#924eff] font-medium">Phone:</p>
            <p className="text-[#924eff] font-medium">Work:</p>
          </div>
          <div className="flex text-[1.2rem] gap-x-[10rem] flex-col gap-y-[2rem]">
            <p className="border-b-[.1rem] border-[#3292ff] px-[2rem]">
              0249247892147
            </p>
            <p className="border-b-[.1rem] border-[#3292ff] px-[2rem]">Usman</p>
            <p className="border-b-[.1rem] border-[#3292ff] px-[2rem]">
              usmanmanzoor1000@gmail.com
            </p>
            <p className="border-b-[.1rem] border-[#3292ff] px-[2rem]">
              03369589172
            </p>
            <p className="border-b-[.1rem] border-[#3292ff] px-[2rem]">
              MERN Stack Developer
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
