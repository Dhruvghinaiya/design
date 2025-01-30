import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import Border from "./Border";

const Chapter = ({ title, active, inactive,  }) => {
    return (
        <div className="bg-lightgreen    sm:col-span-2 flex flex-col justify-between p-2 py-6  h-full relative">
            <div className="flex justify-between items-center mb-4  ">
                <h3 className=" font-bold  xl:px-8   text-xl   ">
                    {title}
                </h3>
                 <EllipsisHorizontalCircleIcon className="size-8  xl:mr-5 lg:mt-2 " />
            </div>
            <div className="flex items-center justify-around md:justify-normal  font-semibold  md:gap-16  ">
                <div className="flex items-end   flex-wrap sm:pl-0 2xl:pl-9  gap-4">
                    <span className="block text-4xl font-extrabold text-textcolor">
                        {active}
                    </span>
                    <span className="text-lg translate-y-1 ">Active</span>
                </div>

                <div className=" flex items-end  flex-wrap gap-4 pb-2 text-inactive"> 
                    <span className="block  text-4xl font-extrabold translate-y-1 ">
                        {inactive}
                    </span>
                    <span className=" xl:text-lg translate-y-2 font-semibold ">Inactive</span>
                </div>
            </div>
            <Border />
        </div>
    );
};

export default Chapter;
