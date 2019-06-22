
const m__action_types = require('./action-types')
const m__reducer__kanban_board = require('./kanban-board/reducer')
const m__redux_helpers = require('~/redux-helpers')
const m__token = require('./token')
const m__token__kanban_board = require('./kanban-board/token')

const reducers = {
	[m__action_types.reset]: () => {},
}

exports.reducer = m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token.array),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_selector(reducers),
		m__redux_helpers.reducers.reducers_combiner({
			[m__token__kanban_board.value]: m__reducer__kanban_board,
		}),
	]),
])
