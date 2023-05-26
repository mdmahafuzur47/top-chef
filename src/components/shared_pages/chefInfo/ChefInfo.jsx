import React, { useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ChefInfo.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefInfo = ({ chefData }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="my-container mb-12">
      <h1 className="text-5xl font-semibold text-center text-green-600 my-12">
        Meet Our Great Chefs
      </h1>
      <div className="border md:px-10 w-full shadow-xl rounded-lg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {chefData?.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-3 md:px-28 py-10 ">
                <div className="">
                  <LazyLoad>
                    <img
                      className="w-[100vw] h-[70vh] rounded-xl shadow-2xl"
                      src={data?.chefImg}
                      alt="chef Img"
                    />
                  </LazyLoad>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold mb-5">
                    Magic chef ready to cook a new dish
                  </h1>
                  <p className="text-gray-500 text-[15px] italic mb-3">
                    {data?.chefBio?.slice(0, 310)}.
                  </p>
                  <p className="text-gray-500 text-[15px] italic">
                    {" "}
                    Chef {data?.chefBio?.slice(310, 900)}
                  </p>
                  <h1 className="mt-20 text-xl font-semibold text-green-500 mb-2">
                    {data?.chefName}
                  </h1>
                  <p className="text-gray-600">Senior Chef, Of Top$chef</p>
                  <div className="mt-4 flex flex-col gap-5 md:flex-row justify-between md:items-center">
                    <div className="flex gap-4 text-2xl ">
                      <span className="opacity-70 hover:opacity-100">
                        <FaFacebook />
                      </span>
                      <span className="opacity-70 hover:opacity-100">
                        <FaTwitter />
                      </span>
                      <span className="opacity-70 hover:opacity-100">
                        <FaGooglePlusG />
                      </span>
                      <span className="opacity-70 hover:opacity-100">
                        <FaGithubSquare />
                      </span>
                      <span className="opacity-70 hover:opacity-100">
                        <FaInstagram />
                      </span>
                    </div>
                    <Link to={`/chefRecipes/${data?.id}`}>
                      <button className="primary-btn">View Recipes</button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ChefInfo;
