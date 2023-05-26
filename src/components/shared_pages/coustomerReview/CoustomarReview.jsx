import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import p1 from "../../../assets/persons/1.jpg";
import p2 from "../../../assets/persons/2.jpg";
import p3 from "../../../assets/persons/3.jpg";
import p4 from "../../../assets/persons/4.jpg";
import p5 from "../../../assets/persons/5.jpg";
import p6 from "../../../assets/persons/6.jpg";
import p7 from "../../../assets/persons/7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// import required modules

const CoustomarReview = () => {
  return (
    <div className="my-10 bg-[#e1cd7f44] p-10">
      <h1 className="text-4xl font-semibold text-center text-green-600 mb-5">
        What Customers Are Saying
        <br />
        About Us
      </h1>
      <div className="w-[30vw] mx-auto border-[1.3px] mb-4"></div>
      <p className="text-center font-bold text-gray-500 italic">
        We pride ourselves on what our<br></br> happy clients say.
      </p>
      <div className="w-[30vw] mx-auto border-[1.3px] mt-4"></div>
      <div className="md:block hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="md:p-5 md:m-10 flex-wrap"
        >
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p1}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Gordon Ramsay'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p2}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Miraz Ovi'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p3}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Partho Sarothi'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p4}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Anthony Bourdain'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p5}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Wolfgang Puck'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p6}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Heston Blumenthal'</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#e1cd7f44] flex flex-col items-center p-5">
              <img
                className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
                src={p7}
                alt="personsImg"
              />
              <p className="mb-8 font-medium italic text-[15px]">
                "Just wanted to thank you for the most fabulous food ever.
                Everyone in the center was very impressed with the turkey and
                the ham. The turkey was completely gone and the ham almost
                totally gone."
              </p>
              <h1 className="mb-12 font-medium italic">'Yotam Ottolenghi'</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden">
        <div className="bg-[#e1cd7f31] rounded-lg flex flex-col items-center p-5">
          <img
            className="w-20 h-20 mt-3 mb-10 rounded-full border-2 border-green-400"
            src={p1}
            alt="personsImg"
          />
          <p className="mb-8 font-medium italic text-[15px]">
            "Just wanted to thank you for the most fabulous food ever. Everyone
            in the center was very impressed with the turkey and the ham. The
            turkey was completely gone and the ham almost totally gone."
          </p>
          <h1 className="mb-12 font-medium italic">'Gordon Ramsay'</h1>
        </div>
      </div>
    </div>
  );
};

export default CoustomarReview;
