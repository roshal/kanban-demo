
exports.root = true

exports.reportUnusedDisableDirectives = true

exports.extends = [
	'eslint:recommended',
	'plugin:import/recommended',
]

exports.settings = {
	react: {
		version: 'detect',
	},
}

exports.rules = {
	/* stylistic-issues */
	'comma-dangle': ['error', 'always-multiline'],
	'indent': ['error', 'tab'],
	'linebreak-style': ['error', 'unix'],
	'new-parens': ['error'],
	'no-mixed-spaces-and-tabs': ['error'],
	/* plugin:import */
	'import/no-unresolved': ['off'],
}

exports.overrides = []

const javascript = {}

exports.overrides.push(javascript)

javascript.files = [
	'*.js',
]

javascript.parserOptions = {
	ecmaVersion: 9,
	sourceType: 'module',
}

javascript.env = {
	node: true,
}

javascript.rules = {
	/* variables */
	'no-unused-vars': 'off',
}

const typescript = {}

exports.overrides.push(typescript)

typescript.files = [
	'*.ts',
]

typescript.parserOptions = {
	project: 'tsconfig.json5',
}

typescript.extends = [
	'plugin:@typescript-eslint/eslint-recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
	'plugin:import/typescript',
	'plugin:react/recommended',
]

typescript.plugins = [
	'react-hooks',
]

typescript.rules = {
	/* plugin:@typescript-eslint */
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
	/* plugin:react-hooks */
	'react-hooks/exhaustive-deps': 'warn',
	'react-hooks/rules-of-hooks': 'error',
}

const test = {}

exports.overrides.push(test)

test.files = [
	'*.test.js',
	'*.test.ts',
]

test.extends = [
	'plugin:jest/recommended',
]
