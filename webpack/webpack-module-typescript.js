
const p__path = require('path')

const m__alias = require('../alias')


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
						alias: {
							...m__alias,
							...argv.hot ? {
								'react-dom': '@hot-loader/react-dom',
							} : {},
						},
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
									sourceMap: true,
								},
							},
						},
					],
				},
			],
		},
	}
}
