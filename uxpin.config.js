module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/components/Button/Button.tsx",
          "src/components/AnotherButton/AnotherButton.tsx",
          "src/components/Chart/Chart.tsx",
          "src/components/TestingStuff/TestingStuff.tsx",
          "src/components/TabContents/TabContents.tsx",
          "src/components/TabContent/TabContent.tsx",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "TypeScript Design System",
};
