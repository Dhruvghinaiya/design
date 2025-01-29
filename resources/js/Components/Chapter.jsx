import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import Border from "./Border";

const Chapter = ({ title, active, inactive,  }) => {
    return (
        <div className="bg-cardcolor shadow-xl    sm:col-span-2 flex flex-col justify-between p-2 py-6  h-full relative">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-textcolor font-bold  xl:px-8   text-xl   ">
                    {title}
                </h3>
                 <EllipsisHorizontalCircleIcon className="size-8  xl:mr-5 lg:mt-3 " />
            </div>
            <div className="flex    items-center  md:gap-16 lg:gap-16 ">
                <div className="flex items-end   flex-wrap sm:pl-0 2xl:pl-9  gap-4">
                    <span className="block text-4xl font-extrabold text-textcolor">
                        {active}
                    </span>
                    <span className="text-lg ">Active</span>
                </div>

                <div className=" flex items-end  flex-wrap gap-4 pb-2 text-inactive"> 
                    <span className="block  text-4xl font-bold ">
                        {inactive}
                    </span>
                    <span className="text-lg ">Inactive</span>
                </div>
            </div>
            <Border />
        </div>
    );
};

export default Chapter;
