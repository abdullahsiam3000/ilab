import React from "react";

const SectionHeading = ({ text }: { text: string }) => {
  return (
    <h2 className="font-medium text-[#333333] leading-[77px] text-[64px]">
      {text}
    </h2>
  );
};

export default SectionHeading;
