
exports.root = true

exports.env = {
	es2020: true,
	node: true,
}

exports.plugins = [
	'react',
]

exports.extends = [
	'eslint:recommended',
	'plugin:react/recommended',
]

exports.settings = {
	react: {
		version: 'detect',
	},
}

exports.rules = {
	/* stylistic issues */
	'comma-dangle': ['error', 'always-multiline'],
	'indent': ['error', 'tab'],
	'linebreak-style': ['error', 'unix'],
	'new-parens': ['error'],
	'no-mixed-spaces-and-tabs': ['error'],
}

exports.reportUnusedDisableDirectives = true

exports.overrides = []

const tests = {}

tests.files = [
	'*.test.js',
	'*.test.ts',
]

tests.plugins = [
	'jest',
]

tests.extends = [
	'plugin:jest/recommended',
]

exports.overrides.push(tests)

const javascript = {}

javascript.parserOptions = {
	sourceType: 'module',
}

javascript.files = '*.js'

javascript.rules = {
	/* variables */
	'no-unused-vars': 'off',
}

exports.overrides.push(javascript)

const typescript = {}

typescript.files = '*.ts'

typescript.extends = [
	'plugin:@typescript-eslint/eslint-recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
]

typescript.parserOptions = {
	project: 'tsconfig.json5',
}

typescript.rules = {
	'@typescript-eslint/ban-ts-ignore': 'off',
	'@typescript-eslint/camelcase': 'off',
	'@typescript-eslint/class-name-casing': 'off',
	'@typescript-eslint/explicit-function-return-type': 'off',
	'@typescript-eslint/indent': ['error', 'tab', {
		SwitchCase: 1,
	}],
	'@typescript-eslint/member-delimiter-style': ['error', {
		multiline: {
			delimiter: 'comma',
		},
		singleline: {
			delimiter: 'comma',
		},
	}],
	'@typescript-eslint/no-empty-interface': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-unused-vars': 'off',
	'@typescript-eslint/no-var-requires': 'off',
	'@typescript-eslint/quotes': ['error', 'single'],
	'@typescript-eslint/semi': ['error', 'never'],
}

exports.overrides.push(typescript)
