import React from "react";

interface TopHeadingProps {
  text: string;
  left?: boolean;
  right?: boolean;
  both?: boolean;
}

const TopHeading: React.FC<TopHeadingProps> = ({ text, left, right, both }) => {
  return (
    <div className="flex items-center mb-2">
      {left || both ? (
        <div
          className="flex-1 border-t-2 border-[#FBB03B]"
          style={{ maxWidth: "32px", minWidth: "32px" }}
        ></div>
      ) : null}
      <p className="font-medium text-[#FBB03B] text-2xl mx-2">{text}</p>
      {right || both ? (
        <div
          className="flex-1 border-t-2 border-[#FBB03B]"
          style={{ maxWidth: "32px", minWidth: "32px" }}
        ></div>
      ) : null}
    </div>
  );
};

export default TopHeading;
