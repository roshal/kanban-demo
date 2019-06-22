
const m__reducer__columns = require('./columns/reducer')
const m__reducer__tasks = require('./tasks/reducer')
const m__redux_helpers = require('~/redux-helpers')
const m__token = require('./token')
const m__token__columns = require('./columns/token')
const m__token__tasks = require('./tasks/token')

module.exports = m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_combiner({
			[m__token__columns.value]: m__reducer__columns,
			[m__token__tasks.value]: m__reducer__tasks,
		}),
	]),
])
