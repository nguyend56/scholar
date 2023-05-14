import React from "react";

const Button = ({ children, secondary, ...rest }) => {
  return (
    <button
      className={`rounded-md px-4 py-2 border-2 border-transparent hover:bg-opacity-40 transition duration-300 ${
        !secondary
          ? "bg-signature text-white"
          : "bg-transparent text-signature !border-signature"
      }`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
