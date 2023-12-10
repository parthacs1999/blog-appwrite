import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center">
      <p className="text-xl text-gray-400 font-bold">Read</p>
      <p className="text-xl text-yellow-400 font-extrabold">UP</p>
    </div>
  );
}

export default Logo;
