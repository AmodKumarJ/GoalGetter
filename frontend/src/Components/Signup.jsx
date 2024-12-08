import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {signup} from '../Redux/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router';
const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const[error,setError] = useState('')

  const onSubmit = async(data) => {
    
    console.log(data);
    try {
      await axios.post('http://localhost:5000/auth/signup',data)
      .then((res)=>{
        if(res.status == 201){
          console.log(res.data)
          dispatch(signup(
            {
              username:res.data.userDetails.username,
              userId:res.data.userDetails.id,
            }
          ))
          console.log("data submitted successfully",data)
          navigate('/')
        }
     
        
      }).catch((err)=>{
        setError(err.response.data.message)
        console.log(err.response.data.message)
      })
    } catch (error) {
      console.log("error while submitting data to backend")
      console.log(error)
    }
    
  };
  return (
    <div className="h-screen w-full bg-bg-sign bg-cover bg-center flex justify-center items-center pt-16 md:pt-0">
      <div className="md:w-[30%] w-full h-fit backdrop-blur-md shadow-2xl rounded-xl border border-white/20 flex justify-center items-center flex-col p-5 gap-5">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <h1 className="font-medium text-[#2f2f2f] text-center">
          Create Your Account and Take Control of Your Day!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-2 flex flex-col gap-4 "
        >
          <div className="relative w-full">
            <input
              {...register("username", { required: "Username is Required" })}
              type="text"
              className="px-10 py-4 rounded-full bg-transparent border-[1px] border-[#2f2f2f] placeholder:text-[#2f2f2f] font-semibold"
              placeholder="Username"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f2f]">
              <FaUser />
            </span>
          </div>
          <div className="relative w-full">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              className="px-10 py-4 rounded-full bg-transparent border-[1px] border-[#2f2f2f] placeholder:text-[#2f2f2f] font-semibold"
              placeholder="Email"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f2f]">
              <BiLogoGmail />
            </span>
          </div>
          <div className="w-full relative">
             <input
              type={show ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).+$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, and one number",
                },
              })}
              className="px-10 py-4 rounded-full bg-transparent border-[1px] border-[#2f2f2f] placeholder:text-[#2f2f2f] font-semibold"
              placeholder="Password"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f2f]">
              <FaLock />
            </span>
            <span
              onClick={() => setShow(!show)} // Toggle state
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#2f2f2f]"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-[#3c1ec4] w-[50%] rounded-full text-white font-semibold flex justify-center items-center hover:scale-110 hover:shadow-lg duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="">
          {Object.keys(errors).length > 0 && (
            <div className=" text-gray-900 border border-red-400 rounded-lg p-4 shadow-md">
              <ul className="list-disc pl-5">
                {Object.keys(errors).map((field, index) => (
                  <li key={index} className="text-sm">
                    {errors[field].message}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {error.length > 0 &&(
            <div className=" text-gray-900 border border-red-400 rounded-lg p-4 shadow-md">
              <ul className="list-disc pl-5">
                <li>{error}</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          Already Have an Account!{" "}
          <strong>
            <Link to="/signin">signIn</Link>
          </strong>
        </div>
        <hr className="w-[80%]" />
        <h1>
          <strong>Signup</strong> With Other
        </h1>
        <div className="w-[80%] h-fit flex gap-2 justify-center items-center ">
          <div className="bg-white px-8 py-2 rounded-md text-3xl hover:scale-110 hover:shadow-lg duration-200">
            <FcGoogle />
          </div>
          <div className="bg-white px-8 py-2 rounded-md text-3xl hover:scale-110 hover:shadow-lg duration-200 ">
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
