import Image from "next/image";
import React from "react";
import leftBanner from "@/assets/images/left-banner1.jpeg";
import rightBanner from "@/assets/images/right-banner1.jpeg";
import buttonIcon from "@/assets/icons/button-icon.svg";

const Banner = () => {
  return (
    <div className="mt-36">
      <div className="px-6 flex gap-6">
        <div
          className="w-[924px] h-[700px] relative bg-cover bg-center flex justify-center items-end pb-10"
          style={{
            backgroundImage: `url(${leftBanner.src})`,
          }}
        >
          <div className="w-[546px] text-center">
            <h3 className="text-[#FBB03B] text-[64px] font-medium">
              Apple Product
            </h3>
            <p className="text-white font-normal text-[16px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#FBB03B] flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FFA500]">
                <span className="text-white">Read more</span>
                <Image src={buttonIcon} alt="search" />
              </button>
              <button className="border border-[#FBB03B] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FBB03B] hover:text-white text-[#FBB03B]">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[924px] h-[700px] relative bg-cover bg-center flex justify-center items-start pt-10"
          style={{
            backgroundImage: `url(${rightBanner.src})`,
          }}
        >
          <div className="w-[546px] text-center">
            <h3 className="text-[#FBB03B] text-[64px] font-medium">
              Apple Product
            </h3>
            <p className="text-[#333333] font-normal text-[16px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#333333] flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FFA500]">
                <span className="text-white">Read more</span>
                <Image src={buttonIcon} alt="search" />
              </button>
              <button className="border border-[#333333] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FBB03B] hover:text-white text-[#333333] hover:border-[#FBB03B]">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
