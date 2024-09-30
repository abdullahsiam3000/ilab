import Image from "next/image";
import React from "react";
import airpod from "@/assets/images/airpods.png";
import buttonIcon from "@/assets/icons/button-icon.svg";
import "./Hero.css";
import TopHeading from "@/components/TopHeading";

const Hero = () => {
  return (
    <div className="bg-black  flex items-center ">
      <div className="wrapper text-white flex justify-between items-center h-[800px]  radial-bg">
        <div className="textBlock relative z-10 p-10">
          <TopHeading text="Latest Air Pods" right />
          <h1 className="font-bold text-7xl w-[403px] leading-[86px]">
            Air Pods Max White
          </h1>
          <p className="text-sm font-normal leading-5 w-[536px] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            excepturi ea repudiandae perferendis pariatur culpa iste? Nisi odit
            iste adipisci aperiam veritatis sed laudantium obcaecati vitae
            eaque, blanditiis, omnis vel accusamus quisquam rem natus inventore
            hic. Beatae ab atque temporibus.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#FBB03B] flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FFA500]">
              <span></span> Read more
              <Image src={buttonIcon} alt="search" />
            </button>
            <button className="border border-[#FBB03B] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#FBB03B] hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="imageBlock relative z-10 p-10">
          <Image src={airpod} alt="airpods" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
