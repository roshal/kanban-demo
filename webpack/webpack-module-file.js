
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					include: [
						r__path.resolve('assets'),
					],
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								context: r__path.resolve('assets'),
							},
						},
					],
				},
			],
		},
	}
}
