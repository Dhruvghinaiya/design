import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Border from "./Border";

const Card1 = () => {
    return (
        <div className="bg-slate-300 col-span-2 flex flex-col justify-between p-4 h-full relative">
  <div className="flex justify-between items-center mb-6">
    <p className="text-textcolor font-bold text-xl p-6  tracking-wider">
      ORGANIZATION
    </p>
    <EllipsisHorizontalCircleIcon className="size-8 mr-3 " />
  </div>

  <div className="flex flex-row ml-6  justify-center items-center flex-grow">
    <img
      src="build\\assets\\icon\\logo.png "
      className="w-73 h-26  mb-11  mr-4"
    />
  </div>
      <Border/>
</div>

    );
};

export default Card1;
