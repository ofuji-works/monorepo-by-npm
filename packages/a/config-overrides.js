const path = require("path")
const { removeModuleScopePlugin,override, babelInclude } = require("customize-cra");


function addAlias(config) {
    config.resolve = {
      ...config.resolve,
      alias: { '@ui': path.resolve(__dirname, '../ui/src') },
    };
    return config;
}

module.exports = override(
    addAlias, 
    removeModuleScopePlugin(),
    babelInclude([
        path.resolve("src"),
        path.resolve("../ui/src")
    ])
)
