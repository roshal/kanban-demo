
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source'),
						],
						test: [
							/\.ts$/,
						],
					},
					resolve: {
						extensions: [
							'.ts',
							'.js',
						],
					},
					use: [
						{
							loader: 'ts-loader',
							options: {
								context: p__path.resolve(),
								compilerOptions: {
									sourceMap: !!argv.develop,
								},
							},
						},
					],
				},
			],
		},
	}
}
