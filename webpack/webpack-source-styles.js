
const p__path = require('path')
const p__postcss_hexrgba = require('postcss-hexrgba')
const p__postcss_import = require('postcss-import')
const p__postcss_mixins = require('postcss-mixins')
const p__postcss_short = require('postcss-short')
const p__postcss_url = require('postcss-url')
const p__precss = require('precss')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
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
								parser: 'sugarss',
								plugins: [
									p__postcss_import({
										resolve: (id) => {
											if (id.startsWith('/')) {
												id = [id.slice(1), 'sss'].join('.')
												return p__path.resolve('source', id) 
											}
											if (id.startsWith('~/')) {
												id = [id.slice(2), 'sss'].join('.')
												return p__path.resolve('source', 'styles', id)
											}
											return id
										},
									}),
									p__postcss_mixins(),
									p__postcss_hexrgba(),
									p__postcss_short(),
									p__postcss_url(),
									p__precss(),
								],
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
	}
}
