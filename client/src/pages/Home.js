import React, { useEffect } from "react";
import { } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    const fetchToken = () => {
      try {
        const token = localStorage.getItem("jwtToken");
        console.log("Home Page token =", token);
        // Additional logic with the token, if needed
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className="flex">
      <div className="text-[1.2rem] absolute flex flex-col justify-center mx-auto w-[50rem] mt-[3rem] left-[35rem] top-[12rem]">
        <p className="text-[2.5rem] font-bold">
          Hi I am{" "}
          <span className="text-[#924eff] text-[3.5rem] font-extrabold">
            Usman Manzoor
          </span>
        </p>
        <p className="text-[#3292ff] text-[2rem] font-extrabold underline">
          MERN Stack Developer
        </p>
        <p className="font-medium mt-[.5rem] tracking-wide">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.{" "}
        </p>
      </div>
      <div className="bg-[#e8daff]     w-screen h-screen"> </div>
      <div className="bg-[rgb(184,217,255)] w-screen h-screen"></div>
    </div>
  );
};

export default Home;
