
const p__webpack = require('webpack')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		plugins: [
			new p__webpack.DefinePlugin({
				$$: 'console.table',
			}),
		],
		devtool: 'source-map',
	}
}
