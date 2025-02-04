import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Border from "./Border";

const OrganizationCard = () => {
    return (
        <div className="bg-lightgreen   col-span-4 sm:col-span-2 flex flex-col justify-between xl:p-4 h-full relative">
  <div className="flex justify-between  items-center mb-6">
    <p className="text-textcolor font-bold text-xl  lg:px-2 pl-2  xl:px-6 py-5   ">
      ORGANIZATION
    </p>
    <EllipsisHorizontalCircleIcon className="size-8  md:mr-3  mr-4   " />
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

export default OrganizationCard;
