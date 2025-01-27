import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Switch from '@mui/material/Switch';
import DiscloserData from "./DiscloserData";

const Discloser = () => {

  const data = [
    { title: 'Display Title', titleName: 'Fall NACC Mini Conference', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Description', titleName: 'The Conference unites people from various sectors...', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Dates', titleName: '10.14.24-16.16.24', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Locations', titleName: 'Hyatt Regency Denver at Colorado Convention Center', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Registration Opens', titleName: '10.02.2024', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Membership Level Access', titleName: 'Chapter Gold, Chapter Silver', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Event Type', titleName: 'On-site', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Event Category', titleName: 'On-site', description: 'The 2024 North American Conservation Corps Annual Conference' },
    { title: 'Status', titleName: 'Active', description: 'The 2024 North American Conservation Corps Annual Conference', classname: 'border-none' },
  ];

  return (
    <div className="h-screen w-full p-10 px-4">
      <div className="mx-auto w-full max-w-7xl border-[#737373] rounded-xl bg-maincontent border-2">
        {data.map((item, index) => (
          <DiscloserData 
            key={index} 
            title={item.title} 
            titleName={item.titleName} 
            description={item.description} 
            classname={item.classname || ''} 
          />
        ))}
      </div>
    </div>
  );
};

export default Discloser;
