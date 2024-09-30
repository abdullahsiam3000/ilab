"use client";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import React, { useRef, useState } from "react";
import p6 from "@/assets/images/p6.png";
import p7 from "@/assets/images/p7.png";
import p8 from "@/assets/images/p8.png";
import p9 from "@/assets/images/p9.png";
import p10 from "@/assets/images/p10.png";
import cart from "@/assets/icons/cart.svg";
import searchWhite from "@/assets/icons/search-white.svg";
import Image from "next/image";
import CartButton from "@/components/buttons/CartButton";
import CustomNextArrow from "@/components/buttons/CustomNextArrow";
import Slider from "react-slick";

const newArrivalProducts = [
  {
    id: 1,
    name: "Product 6",
    image: p6,
    price: 100,
  },
  {
    id: 2,
    name: "Product 7",
    image: p7,
    price: 100,
  },
  {
    id: 3,
    name: "Product 8",
    image: p8,
    price: 100,
  },
  {
    id: 4,
    name: "Product 9",
    image: p9,
    price: 100,
  },
  {
    id: 5,
    name: "Product 10",
    image: p10,
    price: 100,
  },
];

const TopSellingProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
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
        <TopHeading text="Here is our top listed" right />
        <SectionHeading text="Top Selling Products" />

        <div className="relative mt-10">
          {/* Product Grid */}

          <Slider ref={sliderRef} {...settings}>
            {newArrivalProducts.map((product, index) => {
              const slidesToShow = Math.floor(settings.slidesToShow);
              const partiallyVisibleIndex = currentSlide + slidesToShow;
              const isPartiallyVisible =
                index === partiallyVisibleIndex &&
                partiallyVisibleIndex < newArrivalProducts.length;
              return (
                <div
                  key={product.id}
                  className={`border border-[#E6E6E6] p-6 transition-all duration-300 rounded-2xl hover:shadow-custom-hover ${
                    isPartiallyVisible ? "partially-visible" : ""
                  }`}
                >
                  <p className="text-[#333333] font-semibold text-2xl mb-4">
                    {product.name}
                  </p>
                  <div className="flex justify-center items-center">
                    <div className="w-[264px] h-[332px] relative">
                      <Image src={product.image} alt={product.name} fill />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <CartButton text={"Cart"} />
                    <button className="h-10 w-10 rounded-full bg-[#333333] flex justify-center items-center hover:bg-[#FBB03B]">
                      <Image src={searchWhite} alt="search" />
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProduct;
