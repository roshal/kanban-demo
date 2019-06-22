
const p__path = require('path')
const p__webpack = require('webpack')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'extract-loader',
						},
						{
							loader: 'html-loader',
							options: {
								attrs: [
									'link:href',
								],
								removeComments: true,
							},
						},
						{
							loader: 'pug-plain-loader',
							options: {
								// deprecated
								// https://pugjs.org/api/reference.html#options
								pretty: argv.develop ? '\t' : false,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__webpack.PrefetchPlugin('./templates/sources/index.pug'),
		],
	}
}
