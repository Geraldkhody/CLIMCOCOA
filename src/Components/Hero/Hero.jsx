import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroImage1 from '@/assets/Hero/banner2.jpg';
import heroImage4 from '@/assets/Hero/banner3.jpg';
import heroImage2 from '@/assets/Hero/hero2.png';
import heroImage3 from '@/assets/Hero/hero3.png';

const slides = [
  {
    image: heroImage1,
    title: "Building Resilience for Ghana's Cocoa Future",
    description:
      "Understanding the impacts of climate change on cocoa production and empowering farmers with innovative agroforestry solutions",
    buttonText: "Explore the CLIMCOCOA Project",
    buttonLink: "/about",
  },
  {
    image: heroImage2,
    title: "Innovative Research for Climate-Smart Cocoa",
    description:
      "Combining biophysical, socioeconomic, and institutional insights to secure Ghana's cocoa sector in the face of climate change.",
    buttonText: "Learn About Our Multidisciplinary Approach",
    buttonLink: "/project/research",
  },
  {
    image: heroImage3,
    title: "Adapting to Climate Change, Together",
    description:
      "Enhancing farmers' resilience through capacity building, agroforestry, and sustainable practices for a thriving cocoa economy.",
    buttonText: "Join Us in Building a Resilient Future",
    buttonLink: "/contact",
  },
  {
    image: heroImage4,
    title: "Safeguarding Cocoa for Future Generations",
    description:
      "Through cutting-edge research, community engagement, and sustainable practices, we are ensuring Ghana’s cocoa sector thrives in a changing climate.",
    buttonText: "Learn more",
    buttonLink: "/project/field-works",
  },
];

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-8rem)]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-full flex items-center justify-center text-white ${
                slide.image ? "bg-cover bg-center" : slide.background
              }`}
              style={slide.image ? { backgroundImage: `url(${slide.image})` } : {}}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center max-w-3xl px-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mx-8 mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-[16px] md:text-lg mx-6 mb-8">
                    {slide.description}
                  </p>
                  {slide.buttonText && slide.buttonLink && (
                    <a
                      href={slide.buttonLink}
                      className="bg-green-700 text-white text-xs sm:text-ms md:text-[16px] py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                    >
                      {slide.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
