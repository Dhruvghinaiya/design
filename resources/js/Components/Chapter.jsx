import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import Border from "./Border";

const  Chapter = ({ title, active, inactive, className })  => {
    return (
        <div
            className={`col-span-2 flex flex-col justify-between rounded-lg bg-cardcolor p-4 relative ${className}`}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-textcolor font-bold text-xl leading-tight">{title}</h3>
                <EllipsisHorizontalCircleIcon className="size-8" />
            </div>

            <div className="flex items-center justify-around gap-8">
                {active !== undefined && (
                    <div>
                        <span className="block text-4xl font-bold text-[#1e2875]">
                            {active}
                        </span>
                        <span className="text-sm text-gray-600">Active</span>
                    </div>
                )}
                {inactive !== undefined && (
                    <div>
                        <span className="block text-4xl font-bold text-gray-400">
                            {inactive}
                        </span>
                        <span className="text-sm text-gray-600">Inactive</span>
                    </div>
                )}
            </div>
            <Border/>
        </div>
    );
}

export default Chapter