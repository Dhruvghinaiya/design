import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Switch from '@mui/material/Switch';
import { ChevronDownIcon } from 'lucide-react'
import React, { useState } from 'react'

const DiscloserData = ({ title, titleName, description, classname, isOpen, onToggle }) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <div className={`p-3 border-b-2 border-[#caced6] ${classname} ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <Disclosure as="div" open={isOpen} onChange={onToggle}>
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium ">
                <span className="text-black">
                  {title}:
                </span>
                <span className="text-textcolor">
                  {titleName}
                </span>
              </span>
              <ChevronDownIcon className={`size-5 fill-white/60 group-data-[hover]:fill-white/50 ${open ? 'rotate-180' : ''}`} />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 rounded-xl bg-white">
              <div className="flex flex-col p-2">
                <div className="flex justify-end">
                  <PencilSquareIcon className="size-6 " />
                </div>
                <span className="text-gray-400">
                  {title}:
                </span>
                <span className="text-textcolor text-xl">
                  {description}
                </span>
                <span className="text-textcolor">
                  <Switch {...label} defaultChecked size="small" /> show On Public Site
                </span>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default DiscloserData;
