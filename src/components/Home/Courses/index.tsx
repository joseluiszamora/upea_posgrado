"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";

const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id="courses">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Oferta Académica
          </h2>
          <Link
            href={"/cursos"}
            className="text-primary text-lg font-medium hover:tracking-widest duration-500"
          >
            Ver todos los cursos&nbsp;&gt;&nbsp;
          </Link>
        </div>
        <Slider {...settings}>
          {courseData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full">
                <div className="relative rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="course-image"
                    width={389}
                    height={262}
                    className="m-auto clipPath"
                  />
                  {/* <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium">
                      best <br /> seller
                    </h3>
                  </div> */}
                </div>

                <div className="px-3 pt-6">
                  <Link
                    href={"/cursos/" + items.slug}
                    className="text-2xl font-bold text-black max-w-75% inline-block"
                  >
                    {items.heading}
                  </Link>
                  <h3 className="text-2xl font-normal pt-6 text-black/75">
                    {items.name}
                  </h3>

                  <div className="flex justify-between items-center py-6 border-b">
                    {/* <div className="flex items-center gap-4">
                      <h3 className="text-red-700 text-2xl font-medium">
                        {items.rating}
                      </h3>
                      <div className="flex">
                        {renderStars(items.rating, i)}
                      </div>
                    </div> */}
                    <h3 className="text-xl font-medium">
                      Inicia el {items.dateStart}
                    </h3>
                  </div>

                  <div className="flex justify-between pt-6">
                    <div className="flex gap-4">
                      <Icon
                        icon="solar:notebook-minimalistic-outline"
                        className="text-primary text-xl inline-block me-2"
                      />
                      <h3 className="text-base font-medium text-black opacity-75">
                        {items.duration}
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      {/* <Icon
                        icon="solar:users-group-rounded-linear"
                        className="text-primary text-xl inline-block me-2"
                      /> */}
                      <h3 className="text-base font-medium text-black opacity-75">
                        {items.modality}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
