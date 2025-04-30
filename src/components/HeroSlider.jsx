"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title:
      "Help Dr Bhagat rescue and care for abandoned elderly parents from the streets",
    buttonText: "Donate now",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "Help children begin a better life",
    buttonText: "Donate now",
  },
  // Add more slides here...
];

const HeroSlider = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-[400px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-10 text-center">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
