import React from "react";

interface GreenShadowProps {
	width?: string;
	height?: string;
  className?: string;
}

const DarkShadow = <T extends GreenShadowProps>({
	width = '100px',
	height = '100px',
  className = '',
}: T) => {
	return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 758 612"
    >
      <path
        fill="#2D314D"
        d="M12.445 228.84L146.73 363.112a100 100 0 0070.708 29.286h70.693c26.52 0 51.954 10.535 70.708 29.287l161.04 161.027A99.997 99.997 0 00590.584 612h388.853c44.963 0 81.413-36.45 81.413-81.414 0-10.692-2.1-21.279-6.2-31.157a81.393 81.393 0 00-17.65-26.413l-86.388-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.826 30.826 0 019.996-6.68 30.824 30.824 0 0111.792-2.345c17.017 0 30.812-13.795 30.812-30.812a30.81 30.81 0 00-9.025-21.788L798.85 86.11a100.002 100.002 0 00-70.708-29.287H493.7a99.998 99.998 0 01-70.708-29.287l-35.253-35.25A100 100 0 00317.032-37H81.88c-31.77 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.76 28.76c15.887 15.884 15.888 41.64.004 57.525a40.666 40.666 0 01-28.764 11.915C18.742 159.399.53 177.61.53 200.075a40.674 40.674 0 0011.915 28.764v.001z"
      ></path>
    </svg>
  );
}

export default React.memo(DarkShadow);
