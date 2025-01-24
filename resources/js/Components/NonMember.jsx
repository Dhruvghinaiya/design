import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Border from "./Border";

const NonMember = () => {
    return (
        <div className="bg-slate-300 col-span-2 flex flex-col justify-between p-4 h-full relative">
            <div className="flex justify-between items-center mb-6">
                <p className="text-textcolor font-bold text-xl leading-tight">
                    NONMEMBERS
                </p>
                <EllipsisHorizontalCircleIcon className="size-8" />
            </div>

            <div className="flex flex-row  items-end  gap-8 flex-grow">
                <div className="flex items-center gap-2">
                    <span className="block text-4xl font-bold  ">115</span>
                    <span className="text-sm  mt-2 font-semibold ">
                        Total Active
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="block text-4xl font-bold text-gray-400  ">12</span>
                    <span className="text-sm  mt-2 font-semibold text-gray-600">
                        Total Inactive
                    </span>
                </div>
            </div>
            <Border />
        </div>
    );
};

export default NonMember;
