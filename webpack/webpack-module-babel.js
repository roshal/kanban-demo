
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					test: [
						/\.js$/,
					],
					include: [
						r__path.resolve('source'),
					],
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
