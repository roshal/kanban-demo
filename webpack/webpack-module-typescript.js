
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					test: [
						/\.ts$/,
					],
					include: [
						r__path.resolve('source'),
					],
					resolve: {
						extensions: [
							'.ts', '.js',
						],
					},
					use: [
						{
							loader: 'ts-loader',
							options: {
								context: r__path.resolve(),
								configFile: 'tsconfig.json5',
								compilerOptions: {
									sourceMap: !!env.develop,
								},
							},
						},
					],
				},
			],
		},
	}
}
