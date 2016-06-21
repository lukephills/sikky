import * as path from 'path';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
const pkg = require('../package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';

export default {
	entry: path.resolve('build/sikky.js'),
	useStrict: false,
  banner:
	'/**\n' +
	' * ' + pkg.name + '\n' +
	' * @version ' + pkg.version + '\n' +
	' * @copyright (c) 2016 ' + pkg.author + '\n' +
	' * @license MIT <'+ pkg.homepage + '/blob/master/LICENSE>\n' +
	' */',
	plugins: [
		commonjs({ include: 'node_modules/**' }),
		replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
		buble(),
	],
	targets: [
		{
			dest: path.resolve('dist/' + pkg.name + '.js'),
      format: 'umd',
	    moduleName: pkg.name,
	    sourceMap: true
    },
    {
			dest: path.resolve('dist/' + pkg.name + '.es.js'),
      format: 'es',
	    sourceMap: true
    }
  ]
};
