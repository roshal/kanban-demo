
const r__html_webpack_plugin = require('html-webpack-plugin')
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					test: [
						/\.pug$/,
					],
					include: [
						r__path.resolve('pug'),
					],
					use: [
						{
							loader: 'pug-loader',
							options: {
								pretty: '\t',
							},
						},
					],
				},
			],
		},
		plugins: [
			new r__html_webpack_plugin({
				//template: r__path.resolve('pug', 'sources', 'index.pug'),
				//templateParameters: (compilation, assets, options) => {
				//	return {
				//		options: {
				//			compilation, assets,
				//		},
				//	}
				//},
				//inject: false,
				favicon: r__path.resolve('assets', 'sources', 'index.png'),
				//hash: !!env.develop,
			}),
		],
	}
}
