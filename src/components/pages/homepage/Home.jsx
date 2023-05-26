import Lottie from "lottie-react";
import React from "react";
import animation from "../../../assets/animation/cooking.json";
import { Link, useLoaderData } from "react-router-dom";
import ChefInfo from "../../shared_pages/chefInfo/ChefInfo";
import CoustomarReview from "../../shared_pages/coustomerReview/CoustomarReview";
import RestaurantConsulting from "../../shared_pages/restaurantConsulting/RestaurantConsulting";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <>
    {/* Banner Section  */}
      <div className="my-container flex flex-col md:flex-row items-center justify-between mt-20 md:mt-0">
        <div className="md:text-start text-center">
          <h1 className="text-5xl md:text-6xl font-medium mb-3">
            Cook Like a Pro with
            <br />
            Our <span className="text-amber-500">Easy</span> and{" "}
            <span className="text-amber-500">Tasty</span>
            <br />
            Recipes
          </h1>
          <p className="text-xl text-gray-600 italic">
            From quick and easy meals to gourmet delights,we have
            <br />
            something for every taste and occasion.
          </p>
          <Link>
            <button className="primary-btn my-5">Explore all Chefs</button>
          </Link>
        </div>

        <div className="w-1/2 md:-mt-28">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>

      {/* Chef Information Page  */}
      <ChefInfo chefData={chefData} />
      
      {/* Restaurant Consulting Services  */}
      <RestaurantConsulting />

      {/* Coustomer Review Page  */}
      <CoustomarReview />
  
    </>
  );
};

export default Home;
