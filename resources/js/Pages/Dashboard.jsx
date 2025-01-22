import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-20">
        <Navbar />
      </div>

      <div className="flex h-full  ">
            <Sidebar/>
        <div className="flex-grow ">
          <h2 className="text-xl p-4">Welcome to the Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
