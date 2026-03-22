
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import * as React from 'react'
import ProductCard from "./ProductCard";
import {ProductS} from "../../public/Content/dumyy";

const Product = () => {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper mySwiperProduct p-0"
            >
                {ProductS.map((p)=>{

                    return (
                        <div key={p.id}>
                            <SwiperSlide>
                                <ProductCard textTitle={p.title} src={p.image}/>
                            </SwiperSlide>
                        </div>

                    )
                })}

            </Swiper>
        </>
    );
}

export default Product
