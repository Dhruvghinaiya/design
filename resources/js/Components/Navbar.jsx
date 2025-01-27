import React from "react";
import {
    BeakerIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import DotIcon from "./Icons/DotIcon";
const Navbar = () => {
    return (
        <div className="bg-header  flex items-center w-screen   h-21 justify-between ">
            <div className="flex  items-center  gap-3  pl-2 pt-1  text-2xl ">
                {/* <CubeTransparentIcon className="size-8 " /> */}
                <img   src="build\assets\\icon\\header_logo.png" className="w-12 h-12" alt="" />
                <h1 className="tracking-widest font-bold">Seamless</h1>
            </div>
            <div className="flex  items-center  gap-4  text-2xl    sm:pr-20 ">
                <div class="search-container relative     " >
                    <input
                        type="text"
                        class="rounded-3xl h-10 hidden sm:block pl-4 pr-14 mb-2 bg-maincontent"
                        placeholder="Search..."
                    />
                    <MagnifyingGlassIcon class="absolute  hidden sm:block flex-none right-3 top-1/2 transform -translate-y-1/2 size-6 " />
                </div>
                <div className="flex  gap-7 items-center "> 

                <img
                    src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                    className="w-9 h-9  rounded-2xl "
                    alt="" 
                    />
                <p className="text-lg -tracking-tighter ">Justin Watson</p>
                        <DotIcon />
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
