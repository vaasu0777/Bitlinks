import React from "react";
import { alexBrush } from "../page";

const page = () => {
  return (
    <div
      className={`${alexBrush.className} min-h-[79vh] flex items-center justify-center italic text-5xl`}
    >
      <p className="bg-white p-5 text-black rounded-full">
        Contact us at vaasugagneja@gmail.com
      </p>
    </div>
  );
};

export default page;
