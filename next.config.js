const path = require("path");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const dev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
module.exports = withPlugins([
  [
    withCss,
    {
      webpack: function (config, { dev }) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[ext]",
            },
          },
        });
        config.node = {
          fs: "empty",
        };
        config.module.rules.push({
          test: /\.(glb|gltf|bin)$/,
          use: {
            loader: "file-loader",
          },
        });
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          })
        );
        return config;
      },
    },
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
    },
  ],
]);
