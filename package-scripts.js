
const p__nps_utils = require('nps-utils')

const {
	series: {
		nps: series,
	},
	concurrent: {
		nps: concurrent,
	},
} = p__nps_utils

module.exports = {
	scripts: {
		develop: series('serve.develop'),
		produce: series('serve.produce'),
		release: series('clean.produce', 'build.produce', 'firebase.deploy'),
		clean: 'rm -fr public/*',
		build: {
			develop: 'webpack --develop',
			produce: 'webpack --produce',
		},
		watch: {
			analyze: 'webpack --analyze --watch',
			develop: 'webpack --develop --watch',
			produce: 'webpack --produce --watch',
		},
		serve: {
			analyze: 'webpack-dev-server --analyze --hot',
			develop: 'webpack-dev-server --develop --hot',
			produce: 'webpack-dev-server --produce --hot',
		},
		analyze: {
			develop: {
				default: series('analyze.develop.build'),
				build: 'webpack --analyze --develop',
				watch: 'webpack --analyze --develop --watch',
				serve: 'webpack-dev-server --analyze --develop --hot',
			},
			produce: {
				default: series('analyze.produce.build'),
				build: 'webpack --analyze --produce',
				watch: 'webpack --analyze --produce --watch',
				serve: 'webpack-dev-server --analyze --produce --hot',
			},
		},
		lint: {
			default: concurrent('lint.eslint', 'lint.stylelint'),
			eslint: {
				default: 'eslint webpack source/scripts',
				fix: 'eslint --fix webpack source/scripts',
			},
			stylelint: {
				default: 'stylelint source/**/*.sss',
				fix: 'stylelint --fix source/**/*.sss',
			},
		},
		test: 'jest source/scripts',
		firebase: {
			deploy: 'firebase deploy',
			login: {
				default: 'firebase login',
				reauth: 'firebase login --reauth',
			},
			serve: 'firebase serve',
		},
	},
}
