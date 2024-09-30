"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import searchWhite from "@/assets/icons/search-white.svg";
import p1 from "@/assets/images/p1.png";
import p2 from "@/assets/images/p2.png";
import p3 from "@/assets/images/p3.png";
import p4 from "@/assets/images/p4.png";
import p5 from "@/assets/images/p5.png";
import CartButton from "@/components/buttons/CartButton";
import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArrival.css";
import CustomNextArrow from "@/components/buttons/CustomNextArrow";

const newArrivalProducts = [
  { id: 1, name: "Product 1", image: p1, price: 100 },
  { id: 2, name: "Product 2", image: p2, price: 100 },
  { id: 3, name: "Product 3", image: p3, price: 100 },
  { id: 4, name: "Product 4", image: p4, price: 100 },
  { id: 5, name: "Product 5", image: p5, price: 100 },
  { id: 6, name: "Product 6", image: p4, price: 100 },
];

const NewArrival = () => {
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
        <SectionHeading text="New Arrival Products" />

        <div className="relative mt-10">
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
                    <CartButton text="Cart" />
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

export default NewArrival;
