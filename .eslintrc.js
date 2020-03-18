
exports.root = true

exports.env = {
	//browser: true,
	//es6: true,
	//jest: true,
	//node: true,
}

exports.plugins = [
	//'import'
	//'react'
	//'jest'
]

exports.rules = {
  /* possible errors */
	'no-console': 'off',
  /* variables */
	'no-unused-vars': 'off',
  /* stylistic issues */
	'comma-dangle': ['error', 'always-multiline'],
	'linebreak-style': ['error', 'unix'],
	'new-parens': ['error'],
	'no-mixed-spaces-and-tabs': ['error'],
}

exports.reportUnusedDisableDirectives = true

exports.overrides = []

const javascript = {
	files: '*.js',
}

exports.overrides.push(javascript)

javascript.extends = ['eslint:recommended']

const typescript = {
	files: '*.ts',
}

exports.overrides.push(typescript)

typescript.parserOptions = {
	project: 'tsconfig.json5',
}

typescript.extends = [
	'plugin:@typescript-eslint/eslint-recommended',
	'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
]

typescript.rules = {
	'@typescript-eslint/ban-ts-ignore': 'off',
	'@typescript-eslint/camelcase': 'off',
	'@typescript-eslint/class-name-casing': 'off',
	'@typescript-eslint/explicit-function-return-type': 'off',
	'@typescript-eslint/indent': ['error', 'tab', {
		SwitchCase: 1
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
