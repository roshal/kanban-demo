
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
								name: 'index.html',
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
									//	'script:src',
								],
								removeComments: true,
							},
						},
						{
							loader: 'pug-extract-loader',
						},
						{
							loader: 'pug-loader',
							options: {
								// deprecated
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
