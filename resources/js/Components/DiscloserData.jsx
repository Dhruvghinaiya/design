import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Switch from '@mui/material/Switch';
import { ChevronDownIcon } from 'lucide-react'
import React, { useState } from 'react'

const DiscloserData = ({ title, titleName, description, classname }) => {
  const [isOpen, setIsOpen] = useState(false); 
 
  const handleToggle = () => {
    setIsOpen(!isOpen); 
  }

  return (
    <div className={`p-3 border-b-2     ${classname} ${isOpen ? 'bg-white' : ''}`}>
      <Disclosure as="div"   className={`${isOpen ? 'bg-white': 'bg-transparent'} `} >
          <>
            <DisclosureButton onClick={handleToggle}  className={`group  ${isOpen ? 'border-b-2 pb-5' :''}  space-y-3   flex w-full items-center justify-between `}>
              <div className='lg:ml-3  flex flex-col lg:flex-row md:space-x-2 items-start lg:items-center  pt-3 font-medium'>
                <span className="text-darkBlack  text-xsm sm:text-sm  tracking-wide  ">
                  {title}:
                </span>
                <span className=" text-xsm text-left  sm:text-lg font-semibold ">
                  {titleName}
                </span>
              </div>
              <ChevronDownIcon className=" size-4 h-6 w-8   sm:mr-3  fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className={`rounded-xl  bg-white pb-5`}>
              <div className="flex flex-col sm:p-2">
                <div className="flex justify-end">
                  <PencilSquareIcon className="size-7  mr-2" />
                </div>
                <div className='pl-3 flex flex-col   space-y-1' >
                <span className="text-gray-400  pl-2 pt-1">
                  {title}:
                </span>
                <span className=" text-xl lg:text-3xl font-semibold pl-2 tracking-wider  ">
                  {description}
                </span>
                <span className="pt-5 pl-1 tracking-tight ">
                  <Switch  size="small"  /> show On Public Site
                </span>
                </div>
              </div>
            </DisclosurePanel>
          </>

      </Disclosure>
    </div>
  )
}

export default DiscloserData;
