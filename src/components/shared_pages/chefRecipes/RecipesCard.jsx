import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCard = ({ recipes }) => {
  const addToFav = () => {
    toast("Added to Favourite List!");
  };

  return (
    <>
      {recipes.map((recipe) => (
        <div
          className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 my-10 p-5 border md:mx-52 mx-1 rounded-lg shadow-xl"
          key={recipe.recipeName}
        >
          <div>
            <LazyLoad>
              <img
                className="w-screen h-[50vh] rounded-lg shadow-2xl"
                src={recipe?.recipeImg}
                alt=""
              />
            </LazyLoad>
          </div>

          <div>
            <h1 className="text-3xl font-semibold my-3 text-blue-400">
              {recipe?.recipeName}
            </h1>
            <div className="">
              <h1 className="text-xl text-gray-800 font-semibold">
                Recipe Ingredients
              </h1>
              {recipe?.ingredients.map((ingredient) => (
                <ul
                  key={ingredient}
                  className="list-disc ml-12 my-1 text-gray-500"
                >
                  <li>{ingredient}</li>
                </ul>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-1 text-[17px]">
                <p className="font-medium">Rating : </p>
                <h4>{recipe?.rating}</h4>
              </div>
              <div
                onClick={addToFav}
                className="flex items-center gap-1 border rounded-lg p-2 bg-gray-300 text-green-700 cursor-pointer"
              >
                <p className="text-2xl text-green-600">
                  <FaHeart />
                </p>
                <p>Favourite</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </>
  );
};

export default RecipesCard;
