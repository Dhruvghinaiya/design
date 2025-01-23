import React from "react";
import {
    BeakerIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import DotIcon from "./Icons/DotIcon";
const Navbar = () => {
    return (
        <div className="bg-header  flex items-center w-screen  h-20 justify-between ">
            <div className="flex  items-center  gap-3  pl-8 pt-2  text-2xl ">
                <CubeTransparentIcon className="size-8 " />
                <h1 className="tracking-wider">Seamless</h1>
            </div>
            <div className="flex  items-center  gap-6  text-2xl  pr-0  sm:pr-20 ">
                <div class="search-container relative     " >
                    <input
                        type="text"
                        class="rounded-3xl h-10 hidden sm:block pl-4 pr-10"
                        placeholder="Search..."
                    />
                    <MagnifyingGlassIcon class="absolute  hidden sm:block flex-none right-3 top-1/2 transform -translate-y-1/2 size-6 " />
                </div>

                <img
                    src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                    className="w-9 h-9 rounded-2xl"
                    alt="" 
                />
                <p className="text-lg">Justin Watson</p>
                <DotIcon />
            </div>
        </div>
    );
};

export default Navbar;
