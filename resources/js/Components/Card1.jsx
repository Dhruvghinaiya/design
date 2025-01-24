import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Border from "./Border";

const Card1 = () => {
    return (
        <div className="bg-slate-300 col-span-2 flex flex-col justify-between p-4 h-full relative">
  <div className="flex justify-between items-center mb-6">
    <p className="text-textcolor font-bold text-xl leading-tight">
      Organization
    </p>
    <EllipsisHorizontalCircleIcon className="size-8" />
  </div>

  <div className="flex flex-row justify-center items-center flex-grow">
    <img
      src="build\\assets\\icon\\logo.png"
      className="w-72 h-20 mb-6 ml-4"
    />
  </div>
      <Border/>
</div>

    );
};

export default Card1;
