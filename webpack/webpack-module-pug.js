
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
				favicon: p__path.resolve('source', 'assets', 'index.png'),
				inject: 'head',
				template: p__path.resolve('pug', 'sources', 'index.pug'),
			}),
			new p__script_ext_html_webpack_plugin({
				defaultAttribute: 'defer',
			}),
		],
	}
}
