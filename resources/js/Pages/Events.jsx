
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
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
    <div className=" h-screen overflow-hidden font-Montserrat text-indigo  w-screen flex flex-col">
    <div className="h-24  ">
        <Navbar />
    </div>

      <div className="flex h-full overflow-hidden ">
        <Sidebar />
        <div className="flex-grow w-[calc(100%-224px)] overflow-y-auto bg-gray ">
          <div className="p-y-14 lg:pl-16 ml-3 lg:ml-2  mt-12 flex flex-col gap-12 pb-4">
            <div className="flex items-center gap-3 ml-5 sm:ml-0 mt-2">
              <h2 className="font-black text-2xl tracking-wider ">Fall NACC Mini Conference</h2>
              <span className="bg-active text-darkgreen rounded-3xl px-4 py-1 tracking-widest text-sm  font-medium mr-2 sm:mr-0">Active</span>
            </div>
            <TabGroup>
            <TabList
               className="flex flex-wrap   gap-x-12  mr-3 lg:mr-0  space-x-1  font-bold text-lg border-b-2   2xl:w-98  border-indigo">
                {tabs.map((tab, index) => (
                  <Tab as={Fragment} key={index}>
                    {({ selected }) => (
                      <button
                        className={`
                          relative pb-5 w-full font-semibold  text-textcolor tracking-wide   sm:w-auto outline-none text-black"}
                        `}
                      >
                        {tab.name}
                        <div
                          className={`
                            absolute  hidden lg:block bottom-[-2px] left-0 h-1 
                            bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                            rounded-sm transition-all duration-300 ease-in-out
                            ${selected ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                        />
                      </button>
                    )}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-4">
                {tabs.map((tab, index) => (
                  <TabPanel key={index} className=" focus:outline-none">
                    {tab.content}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events

