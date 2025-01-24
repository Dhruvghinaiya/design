import Discloser from "@/Components/Discloser";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

import React from "react";

const Events = () => {
    return (
        <div className=" h-screen overflow-hidden  w-screen flex flex-col">
            <div className="h-24  ">
                <Navbar />
            </div>

            <div className="flex h-full   overflow-x-hidden ">
                <Sidebar />
                <div className="flex-grow w-[calc(100%-224px)] overflow-y-auto  bg-stone-200 opacity-70  ">
                    <div className=" p-y-14 pl-16 mt-4    flex flex-col gap-12  pb-5  ">
                        <div className="flex  items-center  gap-3">
                        <h2 className="font-black text-textcolor text-3xl   ">
                            Fall NACC Mini Conference
                        </h2>
                        <span className="bg-[#c3e0b4] rounded-3xl px-2 py-1- text-sm mt-2">Active</span>
                        </div>

                        <div className="flex flex-wrap gap-x-14 relative font-bold text-lg border-b-2 border-black">
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Event Details</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Registration</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Schedule</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Pricing</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">CEU's</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Speakers</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Exhibitors</a>
  <a href="" className="pb-4 hover:border-b-2 border-black pb-2 w-full sm:w-auto">Sponsors</a>
</div>

                    </div>
                    <div className="pl-10">
                        <Discloser/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
