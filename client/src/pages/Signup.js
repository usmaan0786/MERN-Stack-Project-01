import React, { useState } from "react";
import { FaUser, FaPhone, FaLock, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;

    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, confirmPassword } = user;

    // if key and value pairs are same you can
    //write them one time like work, password, cpassword

    console.log(name, email, phone, work, password, confirmPassword);
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });

    const data = await response.json();

    console.log(data);
    if(data.error){
      window.alert(data.error)
      return data.error
    }
    if (data.status === 422 || !data) {
      window.alert("Invalid Registeration");
    } else {
      window.alert("Registeration successfull");
      navigate("/login");
    }
  };

  return (
    <div className="shadow-md shadow-[#c5c5c5] flex mx-auto rounded-md flex-col text-[#363636] mt-[5rem] p-[3rem] w-max">
      <h1 className="text-[3rem] font-bold">Sign up</h1>
      <div className="flex justify-between mt-[1.5rem] mb-[3rem]">
        <form method="POST" className="flex flex-col gap-y-[1rem] pl-[.5rem]">
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <FaUser className="text-[1.3rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Your Name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <MdEmail className="text-[1.5rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Your Email"
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <FaPhone className="text-[1.3rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Your Phone Number"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <MdWork className="text-[1.3rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Your Profession"
              type="text"
              name="work"
              value={user.work}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <FaLock className="text-[1.3rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Password"
              type="text"
              name="password"
              value={user.password}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center border-b-[.1rem] border-[#202020]">
            <FaEyeSlash className="text-[1.3rem]" />
            <input
              className="w-[20rem] p-2 ml-[.5rem]"
              placeholder="Confirm Password"
              type="text"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputs}
              id="name"
              autoComplete="on"
            />
          </div>
          <button
            onClick={PostData}
            className="bg-[#924eff] tracking-widest hover:scale-105 duration-100 w-max p-3 font-medium text-[1.1rem] text-white rounded-md mt-[1.5rem]"
          >
            Register
          </button>
        </form>
        <div className="flex flex-col justify-center items-center  pl-[12rem]">
          <img
            className="w-[30rem] rounded-lg"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJlZ2lzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="RegisterationImage"
          />
          <Link to={"/login"}>
            <p className="mt-[.5rem] text-[#3651e7] underline">
              I am already registered
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
