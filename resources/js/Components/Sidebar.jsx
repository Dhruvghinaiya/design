import { AdjustmentsHorizontalIcon, HomeIcon, DocumentTextIcon, UsersIcon, CurrencyDollarIcon, ClipboardDocumentCheckIcon, ChartBarIcon, Cog6ToothIcon, AcademicCapIcon, ChartBarSquareIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "./Link";

const Sidebar = () => {
    const links = [
        { name: 'DASHBOARD', icon: HomeIcon },
        { name: 'ORGANIZATION', icon: UsersIcon },
        { name: 'MEMBERSHIP', icon: UsersIcon },
        { name: 'FINANCIALS', icon: CurrencyDollarIcon },
        { name: 'CHAPTERS', icon: DocumentTextIcon },
        { name: 'COMMITEES', icon: ChatBubbleOvalLeftEllipsisIcon },
        { name: 'EDUCATION', icon: AcademicCapIcon },
        { name: 'EVENTS', icon: ClipboardDocumentCheckIcon },
        { name: 'DOCUMENTS', icon: DocumentTextIcon },
        { name: 'REPORTS', icon: ChartBarIcon },
        { name: 'SETTINGS', icon: Cog6ToothIcon }
    ];

    return (
        <div className="w-56 bg-Sidebar opacity-95 hidden sm:block sm:h-full h-screen">
            <div className="flex flex-col items-center h-full">
                {links.map((link) => (
                    <Link key={link.name} name={link.name} Icon={link.icon} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
