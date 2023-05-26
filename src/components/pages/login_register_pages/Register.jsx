import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Show or Hide Password
  const [show, setShow] = useState(true);

  const { register } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(
        "Password have Minimum six char,at least one letter and one number"
      );
      return;
    }
    if ((name, photo, email, password)) {
      register(email, password)
        .then((result) => {
          const user = result.user;
          setError("");
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          });
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <>
      <nav className="border mb-4 mt-16 w-[95vw] md:w-[40vw] mx-auto shadow-2xl p-5 rounded-xl">
        <h1 className="text-center text-3xl font-semibold mt-5 mb-12">
          REGISTER TO YOUR ACCOUNT
        </h1>
        <form onSubmit={handleRegister} className="">
          <input
            className="bg-gray-200 mb-4 p-3 rounded-lg w-full text-xl"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            className="bg-gray-200 mb-4 p-3 rounded-lg w-full text-xl"
            type="text"
            name="photo"
            placeholder="Enter Your Photo Url"
            required
          />
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
              type={show ? "password" : "text"}
              name="password"
              placeholder="Enter Your password"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute top-2 right-3 text-4xl text-gray-600"
            >
              <FaEye />
            </span>
          </div>
          <p className="text-red-600 font-medium">{error}</p>
          <input
            className="primary-btn w-full mt-2 mb-3"
            type="submit"
            value="REGISTER"
          />
        </form>
        <h4 className="text-center text-gray-600 font-medium">
          If You have already have one? Please{" "}
          <Link to={"/login"}>
            <span className="text-red-700 underline">Login</span>
          </Link>
        </h4>
      </nav>
    </>
  );
};

export default Register;
