
const r__webpack_merge = require('webpack-merge')

module.exports = (env = {}, argv = {}) => {
	const array = [
		require('./webpack-common'),
		require('./webpack-module-babel'),
		require('./webpack-module-files'),
		require('./webpack-module-postcss'),
		require('./webpack-module-pug'),
		require('./webpack-module-typescript'),
		env.analyze && require('./webpack-mode-analyze'),
		env.develop && require('./webpack-mode-develop'),
		env.produce && require('./webpack-mode-produce'),
	].reduce((accumulator, value) => {
		if (value) {
			const object = value(env, argv)
			accumulator.push(object)
		}
		return accumulator
	}, [])
	return r__webpack_merge.merge(array)
}
