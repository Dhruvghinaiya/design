import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Chart from './Chart'
import Border from './Border'

const EngagementCard = () => {
  return (
    <div className="bg-cardcolor col-span-4 p-4 relative">
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-textcolor px-8 py-5 font-bold text-xl ">
          ENGAGEMENT
        </p>
        <EllipsisHorizontalCircleIcon className="size-8 mr-3  "  />
      </div>

      <div className="flex flex-row justify-center items-center gap-4 flex-grow">
        <Chart />
      </div>
    <Border/>
     </div>
  )
}

export default EngagementCard
