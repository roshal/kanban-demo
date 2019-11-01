
const p__path = require('path')
const p__webpack_merge = require('webpack-merge')


module.exports = (env = {}, argv = {}) => {
	return p__webpack_merge(
		require('./webpack-common')(env, argv),
		require('./webpack-pug')(env, argv),
		require('./webpack-source-assets')(),
		require('./webpack-source-images')(),
		require('./webpack-source-scripts')(),
		require('./webpack-source-styles')(env, argv),
		argv.analyze && require('./webpack-mode-analyze')(),
		argv.develop && require('./webpack-mode-develop')(),
		argv.produce && require('./webpack-mode-produce')(),
	)
}
