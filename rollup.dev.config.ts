const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const pkg = require('./package.json');

export default {
    entry: 'dist/sikky.js',
    useStrict: false,
    banner: '/**\n' +
    ' * ' + pkg.name + '\n' +
    ' * @version ' + pkg.version + '\n' +
    ' * @copyright (c) 2016 ' + pkg.author + '\n' +
    ' * @license MIT <https://github.com/kflash/sikky/blob/master/LICENSE>\n' +
    ' */',
    plugins: [
        replace({
            'process.env.NODE_ENV': "'development'"
        }),
        buble(),
    ],
    targets: [
        {
            dest: 'dist/' +  pkg.name + '.es5.js',
            format: 'umd',
            moduleName: pkg.name,
            sourceMap: true
        }
    ]
};
