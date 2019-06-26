
module.exports = {
	presets: [
		'@babel/preset-env',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-runtime',
		'babel-plugin-lodash',
		'react-hot-loader/babel',
	],
}
