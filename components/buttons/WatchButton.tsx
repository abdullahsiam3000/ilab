import React from "react";

const WatchButton = ({ text }: { text: string }) => {
  return (
    <button className="group border border-[#333333] py-2 px-4 rounded-full font-normal text-[16px] flex items-center gap-2 hover:bg-[#FBB03B] hover:text-white hover:border-[#FBB03B] transition-all duration-300">
      <span>{text}</span>
      <span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#333333] group-hover:stroke-white transition-colors duration-300"
        >
          <path
            d="M3 13L13 3M13 3H3M13 3V13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default WatchButton;
