import React from 'react';

const Link = ({ name, Icon,route }) => {
    console.log(route);
    
    return (
        <div className="flex items-center gap-3  pl-6 py-3.5  text-white pr-10 w-full hover:bg-linkHover">
        <span>
             <Icon className="h-6 w-6" /> 
         </span>
        <span><a href={route ? route : '' } className='text-sm '>{name}</a></span>
    </div>
    );
};

export default Link;
