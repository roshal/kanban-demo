
const p__lodash_webpack_plugin = require('lodash-webpack-plugin')
const p__optimize_css_assets_webpack_plugin = require('optimize-css-assets-webpack-plugin')
const p__terser_webpack_plugin = require('terser-webpack-plugin')


module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
		},
		plugins: [
			new p__lodash_webpack_plugin(),
		],
		optimization: {
			minimizer: [
				new p__optimize_css_assets_webpack_plugin({
					cssProcessorPluginOptions: {
						preset: [
							'default',
							{
								discardComments: {
									removeAll: true,
								},
							},
						],
					},
				}),
				new p__terser_webpack_plugin({
					extractComments: false,
					terserOptions: {
						cache: true,
						parallel: true,
						output: {
							comments: false,
						},
					},
				}),
			],
		},
	}
}
