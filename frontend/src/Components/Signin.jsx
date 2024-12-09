import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router"; // Correct import for React Router v6
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/authSlice";
import { useNavigate } from "react-router";
import axios from "axios";

const Signin = () => {
  // State management
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true); // Indicate form submission in progress
    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        data
      );
      if (response.status === 200) {
        console.log("Login sucess full",response.data)
        dispatch(signin({
          username: response.data.userdata.userdetails.username,
          userId: response.data.userdata.userdetails.id,
          token: response.data.token,
        })); // Store user data in Redux
        navigate("/"); // Redirect user on successful login
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };  

  return (
    <div className="h-screen w-full bg-bg-sign bg-cover bg-center flex justify-center items-center font-poppin">
      <div className="md:w-[30%] md:h-[90%] w-full h-full backdrop-blur-md shadow-2xl rounded-xl border border-white/20 flex justify-center items-center flex-col p-5 gap-5">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="font-medium text-[#2f2f2f] text-center">
          Welcome Back! Let&apos;s get things done.
        </p>

        {/* Form */}
        <form
          className="p-5 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Username Input */}
          <div className="relative w-full">
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              placeholder="Username"
              className="px-10 py-4 rounded-full bg-transparent border-[1px] border-[#2f2f2f] placeholder:text-[#2f2f2f] font-semibold w-full"
              aria-label="Username"
            /> 
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f2f]">
              <FaUser />
            </span>
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).+$/,
                  message:
                    "Password must include uppercase, lowercase, and a number",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="px-10 py-4 rounded-full bg-transparent border-[1px] border-[#2f2f2f] placeholder:text-[#2f2f2f] font-semibold w-full"
              aria-label="Password"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2f2f2f]">
              <FaLock />
            </span>
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#2f2f2f]"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-10 py-3 bg-[#3c1ec4] w-[50%] rounded-full text-white font-semibold flex justify-center items-center hover:scale-110 hover:shadow-lg duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Error Handling */}
        <div>
          {Object.keys(errors).length > 0 && (
            <div className="text-gray-900 border border-red-400 rounded-lg p-4 shadow-md">
              <ul className="list-disc pl-5">
                {Object.keys(errors).map((field, index) => (
                  <li key={index}>{errors[field].message}</li>
                ))}
              </ul>
            </div>
          )}
          {error && (
            <div className="text-gray-900 border border-red-400 rounded-lg p-4 shadow-md">
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Signup Redirect */}
        <div>
          Don&apos;t have an account?{" "}
          <strong>
            <Link to="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </Link>
          </strong>
        </div>

        <hr className="w-[80%]" />

        {/* Alternative Sign-In */}
        <p>
          <strong>Sign In</strong> With Other
        </p>
        <div className="w-[80%] h-fit flex gap-2 justify-center items-center">
          <div className="bg-white px-8 py-2 rounded-md text-3xl hover:scale-110 hover:shadow-lg duration-200 cursor-pointer">
            <FcGoogle />
          </div>
          <div className="bg-white px-8 py-2 rounded-md text-3xl hover:scale-110 hover:shadow-lg duration-200 cursor-pointer">
            <FaFacebook className="text-[#3b5998]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
