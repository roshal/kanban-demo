
const p__path = require('path')

module.exports = {
	cacheDirectory: 'node/jest',
	coverageDirectory: 'node/coverage',
	//coveragePathIgnorePatterns: [
	//	'/node_modules/',
	//],
	//moduleDirectories: [
	//	'node_modules',
	//],
	moduleFileExtensions: [
		'js',
	],
	moduleNameMapper: {
		'^//(.*)': p__path.resolve('source', '$1'),
		'^~/(.*)': p__path.resolve('source', 'scripts', '$1'),
	},
	testMatch: [
		'**/__tests__/**/*.[jt]s',
		'**/+(*.)test.[tj]s',
	],
}
