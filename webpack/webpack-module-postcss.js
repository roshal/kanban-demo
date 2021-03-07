
const r__mini_css_extract_plugin = require('mini-css-extract-plugin')
const r__path = require('path')
const r__webpack = require('webpack')

const m__name_generator = require('../javascript/name-generator')

module.exports = (env = {}, argv = {}) => {
	const loader = {
		loader: r__mini_css_extract_plugin.loader,
		options: {
			esModule: true,
		},
	}
	return {
		module: {
			rules: [
				{
					test: [
						/\.pcss$/,
					],
					include: [
						r__path.resolve('source'),
					],
					use: [
						loader,
						{
							loader: 'css-loader',
							options: {
								modules: {
									...env.develop ? {
										getLocalIdent: m__name_generator(10),
									} : {},
									...env.produce ? {
										getLocalIdent: m__name_generator(26),
									} : {},
								},
								sourceMap: !!env.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !!env.develop,
							},
						},
					],
				},
				{
					test: [
						/\.pcss$/,
					],
					include: [
						r__path.resolve('styles'),
					],
					use: [
						loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: !!env.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !!env.develop,
							},
						},
					],
				},
			],
		},
		plugins: [
			new r__mini_css_extract_plugin(),
			new r__webpack.SourceMapDevToolPlugin({
				test: [
					'.pcss',
				],
			}),
		],
	}
}
