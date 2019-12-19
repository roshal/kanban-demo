
const p__html_webpack_plugin = require('html-webpack-plugin')
const p__path = require('path')
const p__script_ext_html_webpack_plugin = require('script-ext-html-webpack-plugin')


module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('pug'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'pug-loader',
						},
					],
				},
			],
		},
		plugins: [
			new p__html_webpack_plugin({
				template: p__path.resolve('pug', 'sources', 'index.pug'),
				inject: 'head',
				favicon: p__path.resolve('assets', 'sources', 'index.png'),
				hash: true,
			}),
			new p__script_ext_html_webpack_plugin({
				defaultAttribute: 'defer',
			}),
		],
	}
}
