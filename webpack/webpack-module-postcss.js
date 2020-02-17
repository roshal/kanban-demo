
const p__mini_css_extract_plugin = require('mini-css-extract-plugin')
const p__path = require('path')
const p__webpack = require('webpack')

const m__name_generator = require('../javascript/name-generator')

module.exports = (env = {}, argv = {}) => {
	const loader = {
		loader: p__mini_css_extract_plugin.loader,
		options: {
			hmr: !!argv.hot,
		},
	}
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source'),
						],
						test: [
							/\.sss$/,
						],
					},
					use: [
						loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									...argv.develop ? {
										getLocalIdent: m__name_generator(10),
									} : {},
									...argv.produce ? {
										getLocalIdent: m__name_generator(26),
									} : {},
								},
								sourceMap: !!argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !!argv.develop,
							},
						},
					],
				},
				{
					resource: {
						include: [
							p__path.resolve('styles'),
						],
						test: [
							/\.sss$/,
						],
					},
					use: [
						loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: !!argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !!argv.develop,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__mini_css_extract_plugin(),
			new p__webpack.SourceMapDevToolPlugin({
				test: [
					'.sss',
				],
			}),
		],
	}
}
