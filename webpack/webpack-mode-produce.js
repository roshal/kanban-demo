
const r__optimize_css_assets_webpack_plugin = require('optimize-css-assets-webpack-plugin')
const r__terser_webpack_plugin = require('terser-webpack-plugin')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
		},
		optimization: {
			minimizer: [
				new r__optimize_css_assets_webpack_plugin({
					cssProcessorPluginOptions: {
						preset: ['default', {
							discardComments: {
								removeAll: true,
							},
						}],
					},
				}),
				new r__terser_webpack_plugin({
					extractComments: false,
					terserOptions: {
						output: {
							comments: false,
						},
					},
				}),
			],
		},
	}
}
