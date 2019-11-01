
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
							/\.js$/,
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
