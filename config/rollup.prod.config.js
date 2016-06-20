import * as path from 'path';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import strip from 'rollup-plugin-strip';
import nodeResolve from 'rollup-plugin-node-resolve';
const pkg = require('../package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';

export default {
	entry: path.resolve('build/sikky.js'),
	useStrict: false,
	plugins: [
		uglify({
			warnings: false,
			compress: {
				screw_ie8: true,
				dead_code: true,
				unused: true,
				drop_debugger: true
			}
		}),
		nodeResolve({ jsnext: true, main: true }),
		commonjs({ include: 'node_modules/**' }),
		strip({ debugger: true }),
		replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
		buble(),
	],
	targets: [
		{
			dest: path.resolve('dist/'+ pkg.name +'.min.js'),
      format: 'umd',
	    moduleName: pkg.name,
	    sourceMap: true
    }
  ]
};
