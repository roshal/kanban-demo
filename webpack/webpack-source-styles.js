
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
							/\.sss$/,
						],
					},
					use: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[hash:base26]',
								},
								sourceMap: argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
					],
				},
				{
					resource: {
						include: [
							p__path.resolve('source', 'styles'),
						],
						test: [
							/\.sss$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
							},
						},
						{
							loader: 'extract-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
	}
}
