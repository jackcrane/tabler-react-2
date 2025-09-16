const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  // Only alias to source during local development unless explicitly enabled
  const enableSourceAlias =
    stage === "develop" || process.env.DOCS_USE_SRC === "1";

  if (!enableSourceAlias) return;

  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Use library source directly during docs development
        "tabler-react-2": path.resolve(__dirname, "../src"),

        // Ensure a single React/DOM instance (avoid hooks mismatch)
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
        // Route dependency to the docs install so resolution is stable
        "react-router-dom": path.resolve(
          __dirname,
          "node_modules/react-router-dom"
        ),
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "../src")],
          use: [loaders.js()],
        },
      ],
    },
  });
};
