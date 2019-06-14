
const p__path = require('path')
const p__webpack_stylish = require('webpack-stylish')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: p__path.resolve('source'),
		entry: {
			'index': './scripts/sources/index.js',
		},
		output: {
			path: p__path.resolve('public'),
			chunkFilename: 'chunks/[id].js',
			filename: '[name].js',
			publicPath: '/',
		},
		resolve: {
			alias: {
				'/': p__path.resolve('source'),
				'~': p__path.resolve('source', 'scripts'),
				...argv.hot ? {
					'react-dom': '@hot-loader/react-dom',
				} : {},
			},
			extensions: [
				'.js',
			],
			modules: [
				p__path.resolve('node_modules'),
			],
		},
		resolveLoader: {
			extensions: [
				'.js',
			],
			modules: [
				p__path.resolve('node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
		],
		optimization: {
			splitChunks: {
				minSize: 65536,
				minChunks: 1,
				maxAsyncRequests: 4,
				maxInitialRequests: 1,
				automaticNameDelimiter: '/',
				name: !!argv.produce,
				cacheGroups: {
					default: {
						priority: 0,
						reuseExistingChunk: true,
					},
					vendors: {
						priority: 1,
						test: p__path.resolve('node_modules'),
					},
				},
			},
		},
		devServer: {
			historyApiFallback: true,
			host: '0.0.0.0',
			port: argv.port || 8080,
			stats: 'none',
		},
		watchOptions: {
			ignored: [
				p__path.resolve('node_modules'),
			],
		},
		performance: {
			maxEntrypointSize: 262144,
			maxAssetSize: 262144,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
		stats: 'none',
	}
}
