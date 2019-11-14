const path = require('path');

module.exports = ({ config }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');

    config.module.rules[0].use[0].options.plugins.push(
        require.resolve('@babel/plugin-transform-runtime'),
        require.resolve('@babel/plugin-transform-arrow-functions'),
    );

    return config;
};
