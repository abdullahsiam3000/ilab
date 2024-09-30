"use client";

import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import Image from "next/image";
import whiteArrow2 from "@/assets/icons/white-arrow2.svg";
import phone from "@/assets/icons/phone.svg";
import battery from "@/assets/icons/battery.svg";
import speaker from "@/assets/icons/speaker.svg";
import mike from "@/assets/icons/mike.svg";
import camera from "@/assets/icons/camera.svg";
import cameraHover from "@/assets/icons/camera-hover.svg";
import mikeHover from "@/assets/icons/mike-hover.svg";
import speakerHover from "@/assets/icons/speaker-hover.svg";
import batteryHover from "@/assets/icons/battery-hover.svg";
import phoneHover from "@/assets/icons/phone-hover.svg";
import React, { useState } from "react";
import WatchButton from "@/components/buttons/WatchButton";

const repairData = [
  {
    id: 1,
    heading: "Phone Display Issue or Broken",
    description:
      "On the other hand, we denounce with righteous indignation and dislike menrighteous indignation.",
    icon: phone,
    iconHover: phoneHover,
  },
  {
    id: 2,
    heading: "Apple Battery Life is down",
    description:
      "On the other hand, we denounce with righteous indignation and dislike menrighteous indignation.",
    icon: battery,
    iconHover: batteryHover,
  },
  {
    id: 3,
    heading: "Apple iPhone Speaker Problem",
    description:
      "On the other hand, we denounce with righteous indignation and dislike menrighteous indignation.",
    icon: mike,
    iconHover: mikeHover,
  },
  {
    id: 4,
    heading: "Apple Device Microphone Problem",
    description:
      "On the other hand, we denounce with righteous indignation and dislike menrighteous indignation.",
    icon: speaker,
    iconHover: speakerHover,
  },
  {
    id: 5,
    heading: "Front Camera or Main camera Issue",
    description:
      "On the other hand, we denounce with righteous indignation and dislike menrighteous indignation.",
    icon: camera,
    iconHover: cameraHover,
  },
];

const AccessoriesRepair = () => {
  const [hoveredItemId, setHoveredItemId] = useState<any>(null);

  return (
    <div className="mt-36">
      <div className="wrapper">
        <TopHeading text="You can repair Products" right />
        <div className="flex justify-between items-center">
          <SectionHeading text="Accessories Repair" />
          <div>
            <WatchButton text="Watch" />
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-4 gap-6 overflow-hidden">
            {repairData.map((item) => (
              <div
                key={item.id}
                className="border border-[#E6E6E6] p-6 hover:shadow-md transition-all duration-300 flex flex-col gap-4 rounded-2xl hover:bg-[#FFF7EB]"
                // Set hover state on mouse enter/leave
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                <div className="h-[40px] w-[40px] relative">
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredItemId === item.id ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Image src={item.icon} alt={item.heading} fill />
                  </div>
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredItemId === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image src={item.iconHover} alt={item.heading} fill />
                  </div>
                </div>
                <div className="">
                  <h3 className="text-[#333333] font-semibold text-2xl mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-[#333333] font-normal text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="h-10 w-10 rounded-full bg-[#333333] flex justify-center items-center">
                    <Image src={whiteArrow2} alt="search" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesRepair;
