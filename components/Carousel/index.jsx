import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

// import bgImag from "@/public/assets/image/carousel/tax2.jpg";
import bgImag from "./../../public/assets/image/carousel/tax3.jpg";

import { changeThemeFunc } from "@/app/features/theme";
import { useAppSelector } from "@/app/hooks";


const Carousel = () => {

  const ContentCarousel = [
      {
          id:1,
          textContent:  "رینگ مستری اولین معتمد مالیاتی کشور "
      },
      {
          id:2,
          textContent: "اولین معتمد مالیاتی کشور"
      },
      {
          id:3,
          textContent:  "رینگ مستری امور مالیاتی شما را هموار می‌کند"
      }

  ]

  const { theme } = useAppSelector(state => state.colorTheme);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bgImag.src})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {ContentCarousel.map((item ) => {
          return (
              <div key={item.id}>
                  <SwiperSlide>
                      <div className="title" data-swiper-parallax="-300">
                          <div className="flex flex-col w-full">
                              <div className="grid card bg-base-300 bg-opacity-75 rounded-box place-items-center">
                                  <h1 className={`text-center text-2xl p-2 md:p-8 md:text-6xl ${theme ? "text-orange-400" : ""}`}>{item.textContent}</h1>
                              </div>
                              <div className="grid card bg-base-300 bg-opacity-75 rounded-box place-items-center mt-4">
                                  <p className={`w-full text-center font-semibold text-xs p-1 md:text-xl ${theme ? "text-orange-400" : ""} `}>
                                      با رینگ مستری آموزش ببینید با نرم افزارهای رینگ مستری خودتان صورتحساب را
                                      به سامانه مودیان ارسال کنید
                                  </p>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>

              </div>


          )
        })}

      </Swiper>
    </>
  );
};

export default Carousel;

// <img src="./../../public/assets/image/carousel/tax1.jpg" className="w-full" />
//     <Image
//     width={1000}
//     height={1000}
//     srr="./../../public/assets/image/carousel/tax1.jpg"
//     alt='imageCarousel'
// />
