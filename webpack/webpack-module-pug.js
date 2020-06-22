
const p__html_webpack_plugin = require('html-webpack-plugin')
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						test: [
							/\.pug$/,
						],
						include: [
							p__path.resolve('pug'),
						],
					},
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
			new p__html_webpack_plugin({
				template: p__path.resolve('pug', 'sources', 'index.pug'),
				templateParameters: (compilation, assets, options) => {
					return {
						options: {
							compilation, assets,
						},
					}
				},
				inject: false,
				favicon: p__path.resolve('assets', 'sources', 'index.png'),
				hash: !!argv.develop,
			}),
		],
	}
}
