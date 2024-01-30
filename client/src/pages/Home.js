import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState();

  const callAboutPage = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      setUserData(data);

      if (data.error) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  useEffect(() => {
    callAboutPage();
  }, [callAboutPage, navigate]);

  return (
    <div className="flex">
      <div className="text-[1.2rem] absolute flex flex-col justify-center mx-auto w-[50rem] mt-[3rem] left-[35rem] top-[12rem]">
        <p className="text-[2.5rem] font-bold">
          Hi I am{" "}
          <span className="text-[#924eff] text-[3.5rem] font-extrabold">
          {UserData?.name || ""}
          </span>
        </p>
        <p className="text-[#3292ff] text-[2rem] font-extrabold underline">
        {UserData?.work || ""}
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
