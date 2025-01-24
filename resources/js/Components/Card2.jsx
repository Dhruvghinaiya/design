import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Chart from './Chart'
import Border from './Border'

const Card2 = () => {
  return (
    <div className="bg-cardcolor col-span-4 p-4 relative">
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-textcolor font-bold text-xl leading-tight">
          ENGAGEMENT
        </p>
        <EllipsisHorizontalCircleIcon className="size-8" />
      </div>

      <div className="flex flex-row justify-center items-center gap-4 flex-grow">
        <Chart />
      </div>
    <Border/>
     </div>
  )
}

export default Card2
