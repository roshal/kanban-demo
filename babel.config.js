
const m__alias = require('./alias')


module.exports = {
	presets: [
		'@babel/preset-env',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-runtime',
		[
			'babel-plugin-module-resolver',
			{
				alias: m__alias,
			},
		],
		'babel-plugin-lodash',
		'react-hot-loader/babel',
	],
}
