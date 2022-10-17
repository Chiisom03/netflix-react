import React from "react";

const Loading = () => {
  return (
    <div className="bg-black fixed top-0 h-full w-full left-0 flex justify-center items-center z-50">
      <div className="h-10 w-10 rounded-full bg-black border-t border-white animate-spin"></div>
    </div>
  );
};

export default Loading;
