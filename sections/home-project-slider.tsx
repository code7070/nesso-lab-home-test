"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function HomeProjectSlider() {
  const [infoSwiper, setInfoSwiper] = useState<SwiperType | null>(null);
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "Official App Milan",
      title: "AC Milan App",
      description:
        "An official mobile experience crafted to bring fans closer to the club through performance-driven design and intuitive interaction.",
      image: "/projects/milan.jpg",
    },
    {
      name: "E-Commerce Platform",
      title: "Luxury Fashion Store",
      description:
        "A premium shopping experience with seamless checkout and personalized recommendations.",
      image: "/projects/fashion.jpg",
    },
    {
      name: "Fintech Dashboard",
      title: "Banking Analytics",
      description:
        "Real-time financial insights with interactive charts and predictive analytics.",
      image: "/projects/fintech.jpg",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center p-8 overflow-x-hidden md:overflow-x-auto">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Info & Navigation */}
        <div className="space-y-8">
          <Swiper
            modules={[Controller]}
            onSwiper={setInfoSwiper}
            controller={{ control: imageSwiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={50}
            slidesPerView={1}
            allowTouchMove={false}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-6">
                  <div className="text-sm uppercase tracking-wider text-gray-500">
                    {project.name}
                  </div>
                  <h2 className="text-5xl font-bold">{project.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => infoSwiper?.slidePrev()}
              className="p-4 rounded-full border-2 border-gray-300 hover:border-black transition-colors disabled:opacity-30"
              disabled={activeIndex === 0}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => infoSwiper?.slideTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-12 bg-black" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => infoSwiper?.slideNext()}
              className="p-4 rounded-full border-2 border-gray-300 hover:border-black transition-colors disabled:opacity-30"
              disabled={activeIndex === projects.length - 1}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Image Slider with Card Effect */}
        <div className="relative h-[550px] md:h-[600px] flex items-center justify-center">
          <style jsx global>{`
            .project-image-slider .swiper-slide {
              opacity: 0.4;
            }
            .project-image-slider .swiper-slide-active {
              opacity: 1;
            }
          `}</style>
          <Swiper
            modules={[Controller, EffectCards]}
            onSwiper={setImageSwiper}
            controller={{ control: infoSwiper }}
            effect="cards"
            grabCursor={true}
            cardsEffect={{
              slideShadows: true,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
            className="w-full max-w-[400px] h-[500px] project-image-slider"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-xl">
                  {project.image}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
