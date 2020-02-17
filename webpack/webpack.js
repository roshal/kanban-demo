
const p__webpack_merge = require('webpack-merge')

module.exports = (env = {}, argv = {}) => {
	return p__webpack_merge(
		require('./webpack-common')(env, argv),
		require('./webpack-module-babel')(),
		require('./webpack-module-file')(),
		require('./webpack-module-postcss')(env, argv),
		require('./webpack-module-pug')(),
		require('./webpack-module-typescript')(),
		argv.analyze && require('./webpack-mode-analyze')(),
		argv.develop && require('./webpack-mode-develop')(),
		argv.produce && require('./webpack-mode-produce')(),
	)
}
