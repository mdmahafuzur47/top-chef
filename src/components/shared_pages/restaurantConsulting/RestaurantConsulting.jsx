import React from "react";
import img from '../../../assets/service.jpg'

const RestaurantConsulting = () => {
  return (
    <div
    style={
        {
          width: "100%",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6)),url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "darken",
        }
      }
    >
        <div className="text-white w-full md:w-[49vw] p-5 md:p-20">
            <h1 className="text-4xl font-semibold text-green-100">Restaurant Consulting <br></br>Services</h1>
            <p className="text-[15px] font-medium italic mt-3 text-gray-300">Alanzo, along with his team, offers culinary and management services. We have the experience to provide concept development strategies and best practice principles in order to achieve maximum sales performance.</p>
            <div className="grid md:grid-cols-3 mt-5">
                <p className="text-xl font-semibold text-[#dcc77488]">The Process</p>
                <ul className="list-disc md:ml-0 ml-10 text-gray-200 text-[16px]">
                    <li>Discover</li>
                    <li>Plan</li>
                    <li>Design</li>
                </ul>
                <ul className="list-disc md:ml-0 ml-10 text-gray-200 text-[16px]">
                    <li>Organize</li>
                    <li>Grow</li>
                </ul>
            </div>
            <button className="w-full md:w-[50%] rounded-2xl p-3 font-semibold border-2 border-green-800 mt-10 hover:bg-green-800">Get Started</button>
        </div>
    </div>
  );
};

export default RestaurantConsulting;
