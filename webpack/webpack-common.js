
const p__clean_webpack_plugin = require('clean-webpack-plugin')
const p__nohash = require('nohash')
const p__path = require('path')

const m__alias = require('../alias')

const node_modules = p__path.resolve('node_modules')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: p__path.resolve('source'),
		entry: {
			'index': './sources/index.ts',
		},
		output: {
			chunkFilename: 'chunks/[id].js',
			filename: '[name].js',
			hashFunction: p__nohash.sequence.hex,
			path: p__path.resolve('public'),
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
				name: !argv.produce,
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
			runtimeChunk: !argv.produce && 'single',
		},
		plugins: [
			new p__clean_webpack_plugin.CleanWebpackPlugin(),
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
			maxModules: 0,
		},
	}
}
