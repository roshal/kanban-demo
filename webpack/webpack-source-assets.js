
const p__path = require('path')
const p__webpack = require('webpack')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source', 'assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								context: p__path.resolve('source', 'assets'),
							},
						},
					],
				},
			],
		},
	}
}
