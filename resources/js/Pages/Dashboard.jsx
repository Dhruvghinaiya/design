import Card1 from "@/Components/Card1";
import Card2 from "@/Components/Card2";
import Chapter from "@/Components/Chapter";
import MemberCard from "@/Components/MemberCard";
import Navbar from "@/Components/Navbar";
import NonMember from "@/Components/NonMember";
import Sidebar from "@/Components/Sidebar";
import React from "react";

const Dashboard = () => {
    return (
        <div className=" h-screen overflow-hidden  w-screen flex flex-col">
            <div className="h-24  ">
                <Navbar />
            </div>

            <div className="flex h-full   overflow-hidden ">
                <Sidebar />
                <div className="flex-grow w-[calc(100%-240px)] overflow-y-auto  bg-stone-200 opacity-70  ">
                    <div className=" py-9  pr-20 pl-16 mt-4  flex flex-col gap-12  pb-5  ">
                        <h2 className="font-black ml-1 text-textcolor text-3xl   tracking-wide ">
                            Dashboard
                        </h2> 
                        <div className="grid md:grid-cols-3 lg:grid-cols-6 w-full  gap-6">
                            <Card1 />
                            <Card2 />
                        </div>
                        <div className="grid md:grid-cols-4 lg:grid-cols-6 w-full  gap-6">
                            <Chapter
                                title="CHAPTERS"
                                active={78}
                                inactive={2}
                            />
                            <Chapter
                                title="CHAPTERS"
                                active={102}
                                inactive={23}
                            />
                            <Chapter
                                title="CHAPTERS"
                                active={325}
                                inactive={11}
                            />
                        </div>
                        <div className="grid md:grid-cols-3 lg:grid-cols-6 w-full  gap-6">
                        <MemberCard/>
                        <NonMember />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
