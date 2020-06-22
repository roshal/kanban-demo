
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						test: [
							/\.js$/,
						],
						include: [
							p__path.resolve('source'),
						],
					},
					use: [
						{
							loader: 'babel-loader',
						},
					],
				},
			],
		},
	}
}
