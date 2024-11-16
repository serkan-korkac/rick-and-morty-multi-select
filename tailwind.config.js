/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // app klasörünü kapsar
    "./components/**/*.{js,jsx,ts,tsx}"  // components klasörünü kapsar
  ],
  presets: [require("nativewind/preset")], // NativeWind presetini ekliyoruz
  theme: {
    extend: {}, // Gereksiz özelleştirmeleri buraya ekleyebilirsiniz
  },
  plugins: [], // Gerekli plugin'leri ekleyebilirsiniz
}
