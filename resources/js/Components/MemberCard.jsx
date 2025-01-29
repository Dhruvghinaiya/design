import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Border from "./Border";

const MemberCard = () => {
    return (
        
        <div className="bg-cardcolor col-span-4 pl-10 pr-7   py-6 relative">
            <div className="flex justify-between  items-center  mb-4">
                <p className="text-textcolor font-bold text-xl ">
                    MEMBERS
                </p>

                <EllipsisHorizontalCircleIcon className="size-8" />
                
            </div>

            <div className="flex flex-row items-center flex-wrap mt-6 gap-10 flex-grow text-textcolor">
                <div className="flex items-center gap-4">
                    <span className="block text-4xl font-bold tracking-wider  ">1,240</span>
                    <span className="text-lg  mt-4 font-semibold pl-2 tracking-wider  ">
                        Total Active
                    </span>
                </div>
                <div className="flex items-center gap-4 pl-5  text-inactive ">
                    <span className="block text-4xl font-bold   ">
                        2
                    </span>
                    <span className="text-lg  mt-4 font-semibold tracking-wider text-gray-600">
                        Total Inactive
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4  flex-grow text-textcolor">

                <div className="flex  items-start  flex-wrap gap-12 lg:gap-14 xl:gap-24 pl-1 mt-4  w-full flex-grow-1 text-textcolor">
                    <div className="flex  flex-col">
                        <span>BOD</span>
                        <span>6</span>
                    </div>
                    <div className="flex  flex-col">
                        <span>STAFF</span>
                        <span>16</span>
                    </div>
                    <div className="flex  flex-col">
                        <span>CHAPTER MEMBERS</span>
                        <span>16</span>
                    </div>
                    <div className="flex  flex-col">
                        <span>COMMITTEE MEMBERS</span>
                        <span>16</span>
                    </div>

                </div>
            </div>

            <Border />
        </div>
    );
};

export default MemberCard;
