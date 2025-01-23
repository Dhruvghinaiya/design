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
                textcolor:'#1d4ed8',
                maincontent:'#e5e7eb',
                cardcolor:'#9ca3af'
            },
            height:{
            25:'5rem'
            },
            padding:{
                13:'3rem'
            }
        },
    },

    plugins: [forms],
};
