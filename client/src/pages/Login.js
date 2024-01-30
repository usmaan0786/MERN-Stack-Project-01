import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const LoginData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Login failed");
    } else {
      window.alert("Login Successfull");
      navigate('/')
    }
  };

  return (
    <div className="shadow-md shadow-[#c5c5c5] flex mx-auto rounded-md flex-col text-[#363636] mt-[5rem] p-[3rem] w-max">
      <h1 className="text-[3rem] font-bold">Login</h1>
      <div className="flex items-center mt-[1.5rem] mb-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[25rem] rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ2lufGVufDB8fDB8fHww"
            alt="RegisterationImage"
          />
          <Link to={"/signup"}>
            <p className="mt-[.5rem] text-[#3651e7] underline">
              create an account
            </p>
          </Link>
        </div>
        <form className="flex flex-col gap-y-[1rem] pl-[8rem] pr-[2rem]">
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <MdEmail className="text-[1.5rem]" />
            <input
              className="w-[25rem] p-2 ml-[.5rem] text-[1.2rem]"
              placeholder="Your Email"
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <FaLock className="text-[1.5rem]" />
            <input
              className="w-[25rem] p-2 ml-[.5rem] text-[1.2rem] "
              placeholder="Password"
              type="text"
              name="password"
              id="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={LoginData}
            className="bg-[#924eff] tracking-widest hover:scale-105 duration-100 w-max p-3 font-medium text-[1.1rem] text-white rounded-md mt-[1.5rem]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
