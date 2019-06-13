
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source', 'scripts'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								cacheDirectory: true,
								presets: [
									'@babel/preset-env',
								],
								plugins: [
									'@babel/plugin-proposal-class-properties',
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-transform-runtime',
									'react-hot-loader/babel',
								],
							},
						},
					],
				},
			],
		},
	}
}
