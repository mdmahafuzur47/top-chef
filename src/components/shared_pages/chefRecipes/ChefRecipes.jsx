import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaGithubSquare,
  FaThumbsUp,
} from "react-icons/fa";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLoaderData } from "react-router-dom";
import RecipesCard from "./RecipesCard";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const singleChefData = useLoaderData();

  const { id, chefName, chefImg, expreience, totalRecipes, likes, chefBio } =
    singleChefData;

  useEffect(() => {
    fetch(`https://top-chefs-server-mdmahafuzur47.vercel.app/chefRecipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="my-container mt-5 md:mt-10 flex flex-col md:flex-row items-center gap-16 md:px-20 px-5 py-10 justify-between">
          <div>
          <LazyLoad >
            <img
              className="w-screen rounded-lg shadow-2xl md:h-[60vh]"
              src={chefImg}
              alt="chefImg"
            />
          </LazyLoad>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold mb-5 text-green-500">
              {chefName}
            </h1>
            <p className="text-[16px] text-gray-600 italic ">
              {chefBio.length > 320 ? chefBio.slice(0, 320) : ""}....
            </p>
            <p className="text-[17px] mt-10 text-gray-700">
              Total Recipes : {totalRecipes}
            </p>
            <p className="text-[17px] my-2 text-gray-700">
              {expreience} of experience
            </p>
            <div className="flex md:flex-row flex-col mt-10 justify-between md:items-center md:gap-0 gap-5">
              <div className="flex gap-4 text-3xl text-blue-800">
                <span className="opacity-90 hover:opacity-100">
                  <FaFacebook />
                </span>
                <span className="opacity-90 hover:opacity-100">
                  <FaTwitter />
                </span>
                <span className="opacity-90 hover:opacity-100">
                  <FaGooglePlusG />
                </span>
                <span className="opacity-90 hover:opacity-100">
                  <FaGithubSquare />
                </span>
                <span className="opacity-90 hover:opacity-100">
                  <FaInstagram />
                </span>
              </div>
              <div className="flex gap-2 text-3xl text-blue-800 items-center">
                <span>
                  <FaThumbsUp />
                </span>
                <h3 className="text-[20px] -mb-3">{likes}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-container">
          <h1 className=" text-4xl mt-10 text-center font-semibold mb-5 text-green-500">
            {chefName} Recipes
          </h1>

          <RecipesCard recipes={recipes} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChefRecipes;
