import React from "react";

const IconButton = ({ onClick, Icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-none border-none cursor-pointer ${className}`}
    >
      <Icon width={20} height={20} />
    </button>
  );
};

export default IconButton;
