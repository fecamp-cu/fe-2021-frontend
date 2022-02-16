module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["64px", "96px"],
        "4xl": ["48px", "72px"],
        "3xl": ["36px", "54px"],
        "2xl": ["28px", "42px"],
        xl: ["24px", "36px"],
        lg: ["20px", "30px"],
        base: ["18px", "27px"],
        sm: ["16px", "20px"],
        xs: ["14px", "17.5px"],
      }
    },
    fontFamily: {
      BaiJamjuree: ['Bai Jamjuree', 'san-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
