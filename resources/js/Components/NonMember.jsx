import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Border from "./Border";

const NonMember = () => {
    return (
        <div className="bg-lightgreen    col-span-4 lg:col-span-2 flex flex-col justify-between pl-2 sm:pl-0 py-6 lg:p-2 lg:py-6 xl:p-6   xl:px-8  h-full relative">
            <div className="flex justify-between items-center mb-6">
                <p className="text-textcolor font-bold text-xl pl-2    xl:pl-2 ">
                    NONMEMBERS
                </p>
                <EllipsisHorizontalCircleIcon className="size-8 mr-4 lg:mr-0   sm:translate-x-1 " />
            </div>

            <div className="flex flex-row flex-shrink flex-wrap  items-end  pl-3 gap-16 flex-grow">
                <div className="flex items-center gap-2">
                    <span className="block text-4xl font-bold  ">115</span>
                    <span className="text-sm  mt-2 font-semibold ">
                        Total Active
                    </span>
                </div>
                <div className="flex items-center gap-2 text-inactive">
                    <span className="block text-4xl font-bold   ">12</span>
                    <span className="text-sm  mt-2 font-semibold ">
                         Inactive
                    </span>
                </div>
            </div>
            <Border />
        </div>
    );
};

export default NonMember;
