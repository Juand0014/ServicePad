import React from "react";

interface GreenShadowProps {
	width?: string;
	height?: string;
}

const GreenShadow = <T extends GreenShadowProps>({
	width = "100",
	height = "100"
}: T) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 620 305"
    >
      <path
        fill="url(#paint0_linear_1_481)"
        fillRule="evenodd"
        d="M12.445-78.16L146.73 56.112a100 100 0 0070.708 29.286h70.693c26.52 0 51.954 10.535 70.708 29.287l161.04 161.027A99.997 99.997 0 00590.584 305h388.853c44.963 0 81.413-36.45 81.413-81.414 0-10.692-2.1-21.279-6.2-31.157a81.393 81.393 0 00-17.65-26.413L950.612 79.63c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 00-9.025-21.788L798.85-220.89a100.002 100.002 0 00-70.708-29.287H493.7a99.998 99.998 0 01-70.708-29.287l-35.253-35.25A99.997 99.997 0 00317.032-344H81.88c-31.77 0-57.523 25.754-57.523 57.523a57.524 57.524 0 0016.85 40.676l28.76 28.76c15.887 15.884 15.888 41.64.004 57.525a40.666 40.666 0 01-28.764 11.915C18.742-147.601.53-129.39.53-106.925a40.676 40.676 0 0011.915 28.764v.001z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_481"
          x1="0.53"
          x2="944.117"
          y1="-109.406"
          y2="317.703"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#33D35E"></stop>
          <stop offset="1" stopColor="#2AB6D9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default React.memo(GreenShadow);
