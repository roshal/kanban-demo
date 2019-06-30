
import * as m__action_types from './action-types'
import * as m__middlewares from '~/redux-helpers/middlewares'
import * as m__reducers from '~/redux-helpers/reducers'
import * as m__token from './token'
import * as m__token__kanban_board from './kanban-board/token'

import d__reducer__kanban_board from './kanban-board/reducer'


const reducers = {
	[m__action_types.reset]: () => {},
}

export default m__reducers.middlewares_composer([
	m__middlewares.filters_applicator([
		m__reducers.tokens_checker(m__token.array),
	]),
	m__middlewares.reducers_applicator([
		m__reducers.reducers_selector(reducers),
		m__reducers.reducers_combiner({
			[m__token__kanban_board.value]: d__reducer__kanban_board,
		}),
	]),
])
