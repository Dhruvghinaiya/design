"use client"

import { Tab } from "@headlessui/react"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import Discloser from "@/Components/Discloser"
import { Fragment } from "react"

const Events = () => {
  const tabs = [
    {
      name: "Event Details",
      content: <Discloser />,
    },
    {
      name: "Registration",
      content: <div>Registration Content</div>,
    },
    {
      name: "Schedule",
      content: <div>Schedule Content</div>,
    },
    {
      name: "Pricing",
      content: <div>Pricing Content</div>,
    },
    {
      name: "CEU's",
      content: <div>CEU's Content</div>,
    },
    {
      name: "Speakers",
      content: <div>Speakers Content</div>,
    },
    {
      name: "Exhibitors",
      content: <div>Exhibitors Content</div>,
    },
    {
      name: "Sponsors",
      content: <div>Sponsors Content</div>,
    },
  ]

  return (
    <div className="h-screen overflow-hidden w-screen flex flex-col">
      <div className="h-24">
        <Navbar />
      </div>

      <div className="flex h-full overflow-x-hidden">
        <Sidebar />
        <div className="flex-grow w-[calc(100%-224px)] overflow-y-auto bg-stone-200 opacity-70">
          <div className="p-y-14 pl-16 mt-4 flex flex-col gap-12 pb-5">
            <div className="flex items-center gap-3">
              <h2 className="font-black text-textcolor text-3xl">Fall NACC Mini Conference</h2>
              <span className="bg-[#c3e0b4] rounded-3xl px-2 py-1 text-sm mt-2">Active</span>
            </div>

            <Tab.Group>
              <Tab.List className="flex flex-wrap gap-x-14 font-bold text-lg border-b-2 border-black">
                {tabs.map((tab, index) => (
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <button
                        className={`
                          relative pb-4 w-full sm:w-auto outline-none text-black"}
                        `}
                      >
                        {tab.name}
                        <div
                          className={`
                            absolute  hidden sm:block bottom-[-2px] left-0 h-1 
                            bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                            rounded-sm transition-all duration-300 ease-in-out
                            ${selected ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                        />
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-4">
                {tabs.map((tab, index) => (
                  <Tab.Panel key={index} className="pl-10 focus:outline-none">
                    {tab.content}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events

