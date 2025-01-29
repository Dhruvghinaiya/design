import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import Sidebar from '@/Components/Sidebar';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                abc:['Montserrat']
            },
            colors:{
                white:'#ffffff',
                indigo:'#273175',
                gray:'#edefef',
                cardcolor:'#B3CAC8',
                linkHover:'#171e52',
                secondary:'#d4d4d4',
                grapth:'#b2cfe5',
                inactive:'#6b6a6b',
                active:'#c3e0b4',
                sidebartext:'#b9c0c7 ',

            },
            height:{
            25:'5rem',
            21:'6.25rem',
            26:'6.25rem',
            97:'24rem',
            },
            padding:{
                13:'3rem',
                5:' 1.20rem'
            },
            width:{
            57:'15rem',
            73:'21rem'
            },
            fontSize:{
                size:'17px',
            }
        },
    },

    plugins: [forms],
};
