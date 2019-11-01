
const p__path = require('path')
const p__webpack_merge = require('webpack-merge')

const webpack = (name) => {
	const path = p__path.resolve('webpack', name)
	return require(path)
}

module.exports = (env = {}, argv = {}) => {
	return p__webpack_merge(
		webpack('webpack-common')(env, argv),
		webpack('webpack-source-assets')(),
		webpack('webpack-source-images')(),
		webpack('webpack-source-pug')(env, argv),
		webpack('webpack-source-scripts')(),
		webpack('webpack-source-styles')(env, argv),
		argv.analyze && webpack('webpack-mode-analyze')(),
		argv.develop && webpack('webpack-mode-develop')(),
		argv.produce && webpack('webpack-mode-produce')(),
	)
}
