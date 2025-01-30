import React from "react";
import {
    BeakerIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import DotIcon from "./Icons/DotIcon";
const Navbar = () => {
    return (
        <div className="bg-white   flex items-center w-screen   h-21 justify-between  ">
            <div className="flex  items-center  sm:gap-3  sm:pl-2 pt-1  sm:text-2xl xsm:flex-col ">
                <img src="build\assets\icon\header_logo.png" className="w-12  h-12" alt="" />
                <h1 className="tracking-wide  font-bold ">Seamless</h1> 
            </div>
            <div className="flex  items-center  sm:gap-6  text-2xl  sm:pr-10 lg:pr-20 ">
                <div class="search-container relative" >
                    <input
                        type="text"
                        class="rounded-3xl h-10 hidden  sm:block sm:pl-0  lg:pl-2 py-6 border-none  md:pr-10 mb-2 bg-gray "
                        placeholder="Search..."
                    />
                    <MagnifyingGlassIcon class="absolute rotate-2 -translate-x-2  hidden sm:block flex-none right-3 top-6 transform -translate-y-1/2 size-5  " />
                </div>
                <div className="flex gap-2 lg:gap-4  items-center "> 

                <img
                    src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                    className="w-9 h-9  brightness-125  rounded-2xl "
                    alt="" 
                    />
                <p className=" text-sm md:text-lg  text-black flex sm:mr-1   md:-tracking-tighter font-bold  "><span>Justin</span> <span>Watson</span></p>
                        <DotIcon  />
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
