"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";

const Mentor = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-deepSlate" id="mentor">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative">
        <h2 className="text-midnight_text text-5xl font-semibold">
          Nuestros Docentes
        </h2>

        <Slider {...settings}>
          {MentorData.map((items, i) => (
            <div key={i}>
              <div className="m-3 py-14 md:my-10 text-center">
                <div>
                  <Image
                    src={items.imgSrc}
                    alt="user-image"
                    width={200}
                    height={100}
                    className="inline-block m-auto"
                  />
                  {/* <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                    <Image
                      src={"/images/mentor/linkedin.svg"}
                      alt="linkedin-image"
                      width={25}
                      height={24}
                    />
                  </div> */}
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-lightblack mb-5">
                    {items.name}
                  </h3>
                  <ul>
                    {items.studies.map((item, index) => (
                      <li key={index} className="text-start text-sm mb-2 w-fit">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {items.capacities.map((item, index) => (
                      <li
                        key={index}
                        className="mb-2 text-black/50 text-start text-sm w-fit"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">
                    {items.profession}
                  </h4> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Mentor;
