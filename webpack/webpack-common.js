
const r__clean_webpack_plugin = require('clean-webpack-plugin')
const r__nohash = require('nohash')
const r__path = require('path')

const m__alias = require('../alias')

const node_modules = r__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: r__path.resolve('source'),
		entry: {
			index: './entries/index.ts',
		},
		output: {
			chunkFilename: 'chunks/[id].js',
			filename: '[name].js',
			hashFunction: r__nohash.sequence.hex,
			path: r__path.resolve('public'),
			publicPath: '/',
		},
		resolve: {
			alias: {
				...m__alias,
				...argv.hot ? {
					'react-dom': '@hot-loader/react-dom',
				} : {},
			},
			extensions: [
				'.js',
			],
			modules: [
				node_modules,
			],
		},
		resolveLoader: {
			extensions: [
				'.js',
			],
			modules: [
				node_modules,
			],
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 128 << 7,
				minChunks: 1,
				maxAsyncRequests: 4,
				maxInitialRequests: 1,
				automaticNameDelimiter: '/',
				...env.produce ? {
					name: false,
				} : {},
				cacheGroups: {
					default: {
						priority: 0,
						reuseExistingChunk: true,
					},
					vendors: {
						test: node_modules,
						priority: 1,
					},
				},
			},
			runtimeChunk: !env.produce && 'single',
		},
		plugins: [
			new r__clean_webpack_plugin(),
		],
		devServer: {
			historyApiFallback: true,
			host: '0.0.0.0',
			port: argv.port || 1024,
		},
		watchOptions: {
			ignored: [
				node_modules,
			],
		},
		performance: {
			maxEntrypointSize: 128 << 12,
			maxAssetSize: 128 << 12,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
		stats: {
			children: false,
			entrypoints: false,
		},
	}
}
