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
                Montserrat:['Montserrat']
            },
            colors:{
                white:'#ffffff',
                indigo:'#273175',
                gray:'#edefef',
                lightgreen:'#B3CAC8',
                darkindigo:'#171e52',
                grapth:'#b2cfe9',
                inactive:'#6b6a6b',
                active:'#c3e0b4',
                lightgray:'#b9c0c7',
                darkBlack:'#323232',
                darkgreen:'#404f3a'

            },
            height:{
            25:'5rem',
            21:'6.25rem',
            26:'6.25rem',
            97:'24rem',
            98:'380px'
            },
            padding:{
                13:'3rem',
                5:' 1.20rem'
            },
            width:{
            57:'15rem',
            73:'21rem',
            98:'82rem'
            },
            fontSize:{
                size:'17px',
                xsm:'14px'
            },
            screens:{
            'xsm':{'min':'1px','max':'275px'},
            }
        },
    },

    plugins: [forms],
};
