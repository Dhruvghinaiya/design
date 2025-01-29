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
import { Link } from "@inertiajs/react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const links = [
    { name: 'DASHBOARD', icon: HomeIcon,route:'dashboard' },
    { name: 'ORGANIZATION', icon: UsersIcon ,route:'#'},
    { name: 'MEMBERSHIP', icon: UserGroupIcon ,route:'#'},
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
        {isOpen ? (
          <button
          className={`fixed top-3   left-48 z-50  sm:hidden p-3 rounded-full bg-red-500 text-white shadow-md hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M6 18L18 6M6 6l12 12"/>
          </svg>
         </button> 
        ) : (
          <button
          className={`fixed top-8   opacity-0 left-4 z-50  sm:hidden p-3 rounded-full bg-red-500 text-white shadow-md hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0  " fill="none"  viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          </button>
        )}

      <div 
        className={`fixed top-0 left-0  h-full w-57 bg-indigo  z-40 overflow-y-auto  transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0  sm:block sm:relative sm:h-auto sm:opacity-100 `}
      >
        <div className="flex flex-col items-center h-full    ">
       

          
          {links.map((link) => (
            <Link 
              key={link.name} 
              name={link.name} 
              Icon={link.icon}
              href={link.route}
              className="flex items-center gap-6  pl-4 py-5   text-sidebartext pr-14  w-full hover:bg-linkHover"
            >  <span>
              
                <link.icon className="h-6 w-6 "/> 
              </span>
                <span className="text-lg tracking-tighter  font-medium ">{link.name}</span>
        
            </Link>
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
