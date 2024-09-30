import React from "react";

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
  currentSlide = 0,
  slideCount = 0,
  slidesToShow = 1,
}) => {
  const isDisabled = currentSlide >= slideCount - Math.floor(slidesToShow);

  return (
    <button
      className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FBB03B",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        border: "none",
      }}
      onClick={isDisabled ? undefined : onClick}
      aria-label="Next Slide"
      disabled={isDisabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
        />
      </svg>
    </button>
  );
};

export default CustomNextArrow;
