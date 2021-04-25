
module.exports = {
//   devServer: {
//     proxy: "https://api.basalam.com/",
//   },
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("graphql")
      .test(/\.graphql$/)
      .use("./configs/graphql-loader.js")
      .loader("./configs/graphql-loader.js")
      .end();
  },
};
