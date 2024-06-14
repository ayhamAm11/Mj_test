/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ///#B5A765
        move : '#CDB4DB',
        move2:"#BB6BD9",
        gold : '#A2863C' ,
        gold2:"#C0AF5D",
        ofgold : '#a2863ca6',
        black: "#0A0A0A",
        ofblack: "#7c7c7cb5",
        ofwhite: "#ECEDEF",
        white: "#FFFFFF",
        grey:"#F7F7F7",
        green : "#3df929"
      },
      wordSpacing: {
        'wide': '0.5em',
        'wider': '1em',
        'widest': '2em',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
