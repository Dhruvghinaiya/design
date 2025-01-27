import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import Sidebar from '@/Components/Sidebar';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                header:'#ffffff',
                Sidebar:'#312e81',
                textcolor:'#3d447f',
                maincontent:'#edefee',
                cardcolor:'#cbd5e1',
                linkHover:'#171e52',
                secondary:'#d4d4d4',
                grapth:'#293275',
                grapth2:'#b1cce3'

            },
            height:{
            25:'5rem',
            21:'6.25rem',
            26:'6.25rem'
            },
            padding:{
                13:'3rem',
                5:' 1.20rem'
            },
            width:{
            57:'15rem',
            73:'21rem'
            },
        },
    },

    plugins: [forms],
};
