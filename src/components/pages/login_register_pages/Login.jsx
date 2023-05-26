import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { login, google, github } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";



  // Show or Hide Password
  const [show, setShow] = useState(true)

  //   Google Login
  const handleGoogleSignIN = () => {
    google()
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // GitHub Login
  const handleGitHubSignIN = () => {
    github()
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // With Email and Password Login
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if ((email, password)) {
      login(email, password)
        .then((result) => {
          const user = result.user;
          setError("");
          navigate(from);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <>
      <nav className="border mt-16  w-[95vw] md:w-[40vw] mx-auto shadow-2xl rounded-xl p-5">
        <h1 className="text-center text-3xl font-semibold mt-5 mb-12">
          SIGN IN TO YOUR ACCOUNT
        </h1>
        <form onSubmit={handleSignIn} className="">
          <input
            className="bg-gray-200 mb-4 p-3 rounded-lg w-full text-xl"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <div className="relative">
            <input
              className="bg-gray-200 mb-4 p-3 rounded-lg w-full text-xl"
              type={show? "password" : "text"}
              name="password"
              placeholder="Enter Your password"
              required
            />
            <span onClick={()=> setShow(!show)} className="absolute top-2 right-3 text-4xl text-gray-600"><FaEye /></span>
          </div>
          <div className="flex gap-1 items-center text-gray-600 font-medium">
            <input type="checkbox" name="checked" />
            <p>Keep me signed in</p>
          </div>
          <p className=" mt-2 font-medium text-red-600 ">{error}</p>
          <input
            className="primary-btn w-full mt-7 mb-3"
            type="submit"
            value="SIGN IN"
          />
        </form>
        <h4 className="text-center text-gray-600 font-medium">
          Are You New? Please{" "}
          <Link to={"/register"}>
            <span className="text-red-700 underline">Register Now</span>
          </Link>
        </h4>
      </nav>
      <div className="flex gap-2 mt-3 mb-10 flex-col items-center">
        <div
          onClick={handleGoogleSignIN}
          className="flex items-center gap-3 border p-3 rounded-xl bg-gray-200 text-gray-600 font-medium cursor-pointer"
        >
          <span className="text-xl">
            <FaGoogle />
          </span>
          <p>Sign in With Google</p>
        </div>
        <div
          onClick={handleGitHubSignIN}
          className="flex items-center gap-3 border p-3 rounded-xl bg-gray-200 text-gray-600 font-medium cursor-pointer"
        >
          <span className="text-xl">
            <FaGithub />
          </span>
          <p>Sign in with GitHub</p>
        </div>
      </div>
    </>
  );
};

export default Login;
