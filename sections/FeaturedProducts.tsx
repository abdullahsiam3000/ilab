"use client";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import Image from "next/image";
import p11 from "@/assets/images/p11.png";
import p12 from "@/assets/images/p12.png";
import p13 from "@/assets/images/p13.png";
import p14 from "@/assets/images/p14.png";
import p1 from "@/assets/images/p1.png";
import bag from "@/assets/icons/bag.svg";
import React, { useRef, useState } from "react";
import CartButton from "@/components/buttons/CartButton";
import CustomNextArrow from "@/components/buttons/CustomNextArrow";
import Slider from "react-slick";

const newArrivalProducts = [
  {
    id: 1,
    name: "Write Your Product Title Here",
    image: p11,
    price: 100,
  },
  {
    id: 2,
    name: "Write Your Product Title Here",
    image: p12,
    price: 100,
  },
  {
    id: 3,
    name: "Write Your Product Title Here",
    image: p13,
    price: 100,
  },
  {
    id: 4,
    name: "Write Your Product Title Here",
    image: p14,
    price: 100,
  },
  {
    id: 5,
    name: "Write Your Product Title Here",
    image: p1,
    price: 100,
  },

  {
    id: 6,
    name: "Write Your Product Title Here",
    image: p12,
    price: 100,
  },
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={newArrivalProducts.length}
        slidesToShow={4.5}
      />
    ),
    afterChange: (current: any) => setCurrentSlide(current),
  };

  return (
    <div className="mt-36">
      <div className="wrapper">
        <TopHeading text="Visit Our New" right />
        <SectionHeading text="Feature Products" />
        <div className="relative mt-10">
          <Slider ref={sliderRef} {...settings}>
            {newArrivalProducts.map((product) => (
              <div
                key={product.id}
                className="border border-[#E6E6E6] p-6  transition-all duration-300 hover:shadow-custom-hover rounded-2xl"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="w-[264px] h-[332px] relative">
                    <Image src={product.image} alt={product.name} fill />
                  </div>
                </div>
                <p className="text-[#333333] font-semibold text-2xl mb-4 text-center">
                  {product.name}
                </p>

                <p className="text-[#333333] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="flex gap-4 justify-center items-center mt-4">
                  <CartButton text="Cart" />
                  <button className="h-10 w-10 rounded-full bg-[#333333] flex justify-center items-center hover:bg-[#FBB03B]">
                    <Image src={bag} alt="search" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
