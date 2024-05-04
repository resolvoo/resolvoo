import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            purple: {
                '50': '#faf6fe',
                '100': '#f3eafd',
                '200': '#eadafa',
                '300': '#d9bcf6',
                '400': '#c291ef',
                '500': '#aa66e6',
                '600': '#9447d6',
                '700': '#7e34ba',
                '800': '#6c2f9a',
                '900': '#58277c',
                '950': '#3b115a',
            },
            green: {
                '50': '#ebfef6',
                '100': '#cffce8',
                '200': '#a4f6d6',
                '300': '#69ecc1',
                '400': '#2ed9a7',
                '500': '#09b286',
                '600': '#009b76',
                '700': '#007c62',
                '800': '#03624e',
                '900': '#035142',
                '950': '#002e26',
            },
            gray: {
                '50': '#f8f6f9',
                '100': '#f0ebf3',
                '200': '#dcd3e4',
                '300': '#bdadcc',
                '400': '#9980b0',
                '500': '#7c6097',
                '600': '#674c7d',
                '700': '#543e66',
                '800': '#473656',
                '900': '#3f3149',
                '950': '#0d0a0f',
            },
        },
    },
    extend: {},
}
// plugins: []

export default config
