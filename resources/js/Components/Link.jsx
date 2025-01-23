import React from 'react';

const Link = ({ name, Icon }) => {
    return (
        <div className="flex items-center gap-3 p-3 pl-6 pt-3 text-white pr-10 w-full hover:bg-slate-700">
            <Icon className="h-6 w-6" /> 
            <span><a href="" className='text-sm'>{name}</a></span>
        </div>
    );
};

export default Link;
