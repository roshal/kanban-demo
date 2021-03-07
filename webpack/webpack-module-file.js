
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					include: [
						p__path.resolve('assets'),
					],
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								context: p__path.resolve('assets'),
							},
						},
					],
				},
			],
		},
	}
}
