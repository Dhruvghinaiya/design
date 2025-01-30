import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Card3 = () => {
    return (
        <div className="bg-slate-300  col-span-2 flex  flex-col justify-between border-b-4 border-solid border-red-500 p-4 h-full">
            <div className="flex justify-between items-center mb-6">
                <p className=" font-bold text-xl leading-tight">
                    CHAPTERS
                </p>
                <EllipsisHorizontalCircleIcon className="size-8" />
            </div>
            <div className="flex flex-row justify-around items-center   flex-grow">
                <span><span className="" >78</span> Active</span>
                <span>2 InActive</span>
            </div>
        </div>
    );
};

export default Card3;


  
  
  