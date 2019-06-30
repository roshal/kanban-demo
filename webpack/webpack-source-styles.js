
const p__mini_css_extract_plugin = require('mini-css-extract-plugin')
const p__path = require('path')

const m__webpack_helpers = require('../javascript/webpack-helpers')

module.exports = (env = {}, argv = {}) => {
	const loader = {
		loader: p__mini_css_extract_plugin.loader,
		options: {
			hmr: argv.hot,
		},
	}
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source', 'scripts'),
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
										getLocalIdent: m__webpack_helpers.mapper('number'),
									} : {},
									...argv.produce ? {
										getLocalIdent: m__webpack_helpers.mapper('string'),
									} : {},
								},
								sourceMap: argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
					],
				},
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
						loader,
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
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__mini_css_extract_plugin(),
		],
	}
}
