
const r__webpack = require('webpack')

module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		plugins: [
			new r__webpack.DefinePlugin({
				$$: 'console.log',
			}),
		],
		devtool: 'source-map',
	}
}
