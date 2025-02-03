/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["./src/assets/fonts/figtree_Light.ttf"],
        italic: ["./src/assets/fonts/inter_Italic.ttf"],
        regular: ["./src/assets/fonts/inter_Regular.ttf"],
        roboto: ["./src/assets/fonts/roboto.ttf"],
        bold: ["./src/assets/fonts/ttramillas_Bold.ttf"],
      },
    },
  },
  plugins: [],
};
