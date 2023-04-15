const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // modifyLessRule(lessRule, context) {
        //   // You have to exclude these file suffixes first,
        //   // if you want to modify the less module's suffix
        //   lessRule.exclude = /\.less$/;
        //   return lessRule;
        // },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "red",
              "@link-color": "#1DA57A",
              "@border-radius-base": "2px"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass")
            }
          }
        ]
      }
    ]
  }
};
