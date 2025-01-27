import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import Border from "./Border";

const Chapter = ({ title, active, inactive, className }) => {
    return (
        // <div
        //     className={`col-span-2 flex flex-col justify-between rounded-lg bg-cardcolor p-4 relative ${className}`}
        // >
        //     <div className="flex items-center justify-between mb-4">
        //         <h3 className="text-textcolor font-bold px-6  text-xl  ">{title}</h3>
        //         <EllipsisHorizontalCircleIcon className="size-8 mr-3"  />
        //     </div>
        <div className="bg-slate-300 col-span-2 flex flex-col justify-between p-2 h-full relative">
            <div className="flex justify-between items-center mb-6">

                <h3 className="text-textcolor font-bold px-8  text-xl tracking-widest  ">
                    {title}
                </h3>
                 <EllipsisHorizontalCircleIcon className="size-8 mr-4 mt-" />
            </div>
            <div className="flex items-center  pb-3 gap-20   ">
                <div className="flex items-end  pl-10 pt-2  gap-4">
                    <span className="block text-4xl font-bold text-[#1e2875]">
                        {active}
                    </span>
                    <span className="text-lg text-gray-600">Active</span>
                </div>

                <div className=" flex items-end gap-4"> 
                    <span className="block text-4xl font-bold text-gray-400">
                        {inactive}
                    </span>
                    <span className="text-sm text-gray-600">Inactive</span>
                </div>
            </div>
            <Border />
        </div>
    );
};

export default Chapter;
