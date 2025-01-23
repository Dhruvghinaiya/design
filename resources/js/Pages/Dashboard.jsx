import Chart from "@/Components/Chart";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import {
    AcademicCapIcon,
    EllipsisHorizontalCircleIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Dashboard = () => {
    return (
        <div className=" h-screen  w-screen flex flex-col">
            <div className="h-24  ">
                <Navbar />
            </div>

            <div className="flex h-full  ">
                <Sidebar />
                <div className="flex-grow  bg-maincontent opacity-70  ">
                    <div className=" p-12  flex flex-col gap-12   ">
                        <h2 className="font-black text-textcolor text-3xl   ">
                            Dashboard
                        </h2>
                        {/* <div className="grid grid-cols-4  w-full h-52 gap-10">
                            <div className="bg-cardcolor  col-span-1 flex flex-col justify-around border-b-4 border-solid border-red-500">
                                <div className="flex  justify-around items-center  mb-6 ">
                                    <p className="text-textcolor font-bold text-xl">
                                        Organization
                                    </p>
                                    <EllipsisHorizontalCircleIcon className="size-8" />
                                </div>

                                <div className="flex justify-center items-center gap-4 pb-6 ">
                                    <AcademicCapIcon className="size-12" />
                                    <h2 className="text-3xl">nacc</h2>
                                </div>
                            </div>

                            <div className="bg-cardcolor col-span-3 border-b-4 border-solid border-red-500 ">
                                <div className="flex justify-between mt-4">
                                    <p className="text-textcolor font-bold text-xl pl-8">
                                        Organization
                                    </p>
                                    <EllipsisHorizontalCircleIcon className="size-8 ml-auto mr-8" />
                                </div>
                            </div>
                        </div> */}
                        <div className="grid grid-cols-4 w-full h-52 gap-6">
                            <div className="bg-cardcolor col-span-1 flex flex-col justify-between border-b-4 border-solid border-red-500 p-4 h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-textcolor font-bold text-xl leading-tight">
                                        Organization
                                    </p>
                                    <EllipsisHorizontalCircleIcon className="size-8" />
                                </div>

                                <div className="flex flex-row justify-center items-center gap-4 flex-grow">
                                    <AcademicCapIcon className="size-12" />
                                    <h2 className="text-3xl">nacc</h2>
                                </div>
                            </div>

                            <div className="bg-cardcolor col-span-3 border-b-4 border-solid border-red-500 p-4">
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-textcolor font-bold text-xl leading-tight">
                                    ENGAGEMENT
                                    </p>
                                    <EllipsisHorizontalCircleIcon className="size-8" />
                                </div>
                                <div className="flex flex-row justify-center items-center gap-4 flex-grow">
                                    
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
