
import * as m__action_types from './action-types'
import * as m__redux_helpers from '~/redux-helpers'
import * as m__token from './token'
import * as m__token__kanban_board from './kanban-board/token'

import d__reducer__kanban_board from './kanban-board/reducer'


const reducers = {
	[m__action_types.reset]: () => {},
}

export const reducer = m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token.array),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_selector(reducers),
		m__redux_helpers.reducers.reducers_combiner({
			[m__token__kanban_board.value]: d__reducer__kanban_board,
		}),
	]),
])
