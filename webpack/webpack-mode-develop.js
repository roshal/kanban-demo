
const p__webpack = require('webpack')


module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		plugins: [
			new p__webpack.DefinePlugin({
				$$: 'console.log',
				$$$: 'console',
				$c: 'console.count',
				$e: 'console.error',
				$i: 'console.info',
				$l: 'console.log',
				$t: 'console.table',
				$w: 'console.warn',
			}),
		],
		devtool: 'source-map',
	}
}
