import React, { useState } from "react";
import { 
  HomeIcon, 
  UsersIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon, 
  ClipboardDocumentCheckIcon, 
  ChartBarIcon, 
  Cog6ToothIcon, 
  AcademicCapIcon, 
  ChatBubbleOvalLeftEllipsisIcon 
} from "@heroicons/react/24/solid";
import Link from "./Link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const links = [
    { name: 'DASHBOARD', icon: HomeIcon,route:'dashboard' },
    { name: 'ORGANIZATION', icon: UsersIcon ,route:'#'},
    { name: 'MEMBERSHIP', icon: UsersIcon ,route:'#'},
    { name: 'FINANCIALS', icon: CurrencyDollarIcon,route:'#' },
    { name: 'CHAPTERS', icon: DocumentTextIcon ,route:'#'},
    { name: 'COMMITEES', icon: ChatBubbleOvalLeftEllipsisIcon,route:'#' },
    { name: 'EDUCATION', icon: AcademicCapIcon ,route:'#'},
    { name: 'EVENTS', icon: ClipboardDocumentCheckIcon,route:'event' },
    { name: 'DOCUMENTS', icon: DocumentTextIcon,route:'#' },
    { name: 'REPORTS', icon: ChartBarIcon,route:'#' },
    { name: 'SETTINGS', icon: Cog6ToothIcon,route:'#' },
    
    
    
    
  ];

  const toggleSidebar = () => setIsOpen(!isOpen); 

  return (
    <>
      <button
        className={`fixed top-5 opacity-0 left-5 z-50  sm:hidden p-3 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-300 ease-in-out`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none"  viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        )}
      </button>

      <div 
        className={`fixed top-0 left -0 w-56 h-full bg-Sidebar opacity-95 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-56 sm:block sm:relative sm:h-auto sm:opacity-100  `}
      >
        <div className="flex flex-col items-center h-full    ">
       
          {links.map((link) => (
            <Link 
              key={link.name} 
              name={link.name} 
              Icon={link.icon}
              route={link.route}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
