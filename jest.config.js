
const r__path = require('path')

const array = [
	r__path.resolve('node_modules'),
]

module.exports = {
	cacheDirectory: 'node/jest/cache',
	coverageDirectory: 'node/jest/coverage',
	coveragePathIgnorePatterns: array,
	moduleDirectories: array,
	moduleFileExtensions: [
		'js',
	],
	moduleNameMapper: {
		'(?<=^//).*': r__path.resolve('$0'),
		'(?<=^~/).*': r__path.resolve('source', '$0'),
	},
	testMatch: [
		'**/__tests__/**/*.[jt]s',
		'**/*.test.[tj]s',
	],
	testPathIgnorePatterns: array,
	transformIgnorePatterns: array,
	watchPathIgnorePatterns: array,
}
