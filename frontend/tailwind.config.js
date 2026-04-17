import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['light','dark','pastel','retro','dim','cupcake','wireframe','synthwave','valentine','halloween','sunset','forest','aqua','lofi','pastel','nord','lemonade'  ]
  }
}