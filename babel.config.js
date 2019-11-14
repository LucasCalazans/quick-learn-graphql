module.exports = api => {
    api.cache(false);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: 'commonjs',
                },
            ],
            '@babel/preset-react',
        ],
        ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/],
        plugins: [
            'babel-plugin-styled-components',
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-class-properties',
            'syntax-dynamic-import',
        ],
    };
};
