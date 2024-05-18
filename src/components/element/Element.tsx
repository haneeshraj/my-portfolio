const Element = {
  star: ({
    height = "28",
    width = "28",
    className,
  }: {
    height?: string;
    width?: string;
    className?: string;
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M21.7763 27.6117C17.1773 19.5032 8.75542 17.1773 0.646967 21.7763C8.75542 17.1773 11.0813 8.75543 6.48235 0.646978C11.0813 8.75543 19.5032 11.0813 27.6117 6.48237C19.5032 11.0813 17.1773 19.5032 21.7763 27.6117Z"
          fill="#8E52C5"
        />
      </svg>
    );
  },

  simpleArrowRight: ({
    height = "24",
    width = "24",
    color = "#EFEFF0",
    className,
  }: {
    height?: string;
    width?: string;
    className?: string;
    color?: string;
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_80_134)">
          <path
            d="M10 17L15 12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <path
            d="M15 12L10 7"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_80_134">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  arrow: ({
    height = "25",
    width = "11",
    className,
  }: {
    height?: string;
    width?: string;
    className?: string;
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M24 1.0522C24 1.0522 12.5 -0.319497 12.5 11C12.5 -0.319497 1 1.0522 1 1.0522"
          stroke="white"
          strokeMiterlimit="10"
        />
      </svg>
    );
  },
};

export default Element;
