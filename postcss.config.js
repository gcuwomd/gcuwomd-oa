export default {
  plugins: {
    // ...
    "postcss-px-to-viewport": {
      // options{
      unitToConvert: "px",
      viewportWidth: 393,
      viewportHeight: 852,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
