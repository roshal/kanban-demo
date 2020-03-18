
const p__webpack_merge = require('webpack-merge')

module.exports = (env = {}, argv = {}) => {
	const configs = [
		require('./webpack-common'),
		require('./webpack-module-babel'),
		require('./webpack-module-file'),
		require('./webpack-module-postcss'),
		require('./webpack-module-pug'),
		require('./webpack-module-typescript'),
		argv.analyze && require('./webpack-mode-analyze'),
		argv.develop && require('./webpack-mode-develop'),
		argv.produce && require('./webpack-mode-produce'),
	].reduce((accumulator, value) => {
		if (value) {
			const config = value(env, argv)
			accumulator.push(config)
		}
		return accumulator
	}, []);
	return p__webpack_merge(configs)
}
