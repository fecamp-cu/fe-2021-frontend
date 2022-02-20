module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-fast": "fade-in 0.5s ease-in-out",
        "fade-in": "fade-in 3s ease-in-out",
        "fade-out": "fade-out 3s ease-in-out",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(175.22deg, #8A202B -4.38%, #A43344 34.51%, #AC394C 66.36%, #8A202B 116.67%);",
        landing: 'url("/src/assets/images/landingBackground.svg")',
      },
      colors: {
        primary: "#8A202B",
        gray: {
          1: "#323232",
        },
        red: {
          1: "#bc4646",
        },
      },
      fontFamily: {
        NotoSansThai: ["NotoSansThai", "san-serif"],
        Chulalongkorn: ["CHULALONGKORN", "sans-serif"],
        MuseoModerno: ["MuseoModerno", "sans-serif"],
        BaiJamjuree: ["BaiJamjuree", "sans-serif"],
      },
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
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      screens: {
        "mobile-s": "320px",
        "mobile-m": "370px",
        "mobile-l": "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}
