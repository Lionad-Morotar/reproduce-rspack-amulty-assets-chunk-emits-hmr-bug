const htmlPlugin = require("@rspack/plugin-html");
const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

const htmlPath = path.resolve(__dirname, "../index.html");
const entryPath = path.resolve(__dirname, "../index.js");

module.exports = function (mode) {
  const isProd = mode === "production";

  return {
    context: __dirname,
    builtins: {
      presetEnv: {
        targets: ["Chrome >= 89"],
      },
    },
    target: ["web", "es2015"],
    entry: entryPath,
    plugins: [
      new VueLoaderPlugin(),
      new htmlPlugin({
        title: "复现模板",
        template: htmlPath,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            experimentalInlineMatchResource: true,
          },
        },
        {
          test: /\.svg/,
          type: "asset/resource",
        },
      ],
    },
  };
};
