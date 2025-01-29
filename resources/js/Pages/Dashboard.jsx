
import Chapter from "@/Components/Chapter";
import MemberCard from "@/Components/MemberCard";
import Navbar from "@/Components/Navbar";
import NonMember from "@/Components/NonMember";
import Sidebar from "@/Components/Sidebar";
import React from "react";
import OrganizationCard from "@/Components/OrganizationCard";
import EngagementCard from "@/Components/EngagementCard";

const Dashboard = () => {
    const data = [{
        title:'CHAPTERS',
        active:78,
        inactive:2
    },
    {
        title:'COMMITTEES',
        active:102,
        inactive:23
    },
    {
        title:'SUBSCRIBERS',
        active:325,
        inactive:11
    }

]
    return (
        <div className=" lg:h-screen overflow-hidden font-abc  w-screen flex flex-col text-indigo  ">
            
            <div className="h-24  ">
                <Navbar />
            </div>

            <div className="flex h-full   overflow-hidden ">
                <Sidebar />
                <div className="flex-grow w-[calc(100%-240px)] overflow-y-auto    bg-gray  ">
                    <div className=" py-9  pr-20 pl-16 mt-4  flex flex-col gap-8  pb-5  ">
                        <h2 className="font-bold  ml-1 pt-1 text-textcolor  text-2xl  font-abc  tracking-wider ">
                            Dashboard
                        </h2> 
                        <div className="grid md:grid-cols-3 pt-6 lg:grid-cols-6 w-full  gap-6">
                            <OrganizationCard />
                            <EngagementCard />
                        </div>
                        <div className="grid md:grid-cols-4  lg:grid-cols-6 w-full  gap-6">
                            {data.map((item,)=>(
                                <Chapter title={item.title}  active={item.active} inactive={item.inactive} />
                            ))}
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
