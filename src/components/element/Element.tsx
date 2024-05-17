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
          stroke-miterlimit="10"
        />
      </svg>
    );
  },
};

export default Element;
