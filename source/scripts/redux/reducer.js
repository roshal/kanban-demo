
import m__action_types from './action-types'
import m__reducer__kanban_board from './kanban-board/reducer'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'
import * as ms__tokens__kanban_board from './kanban-board/tokens'


const reducers = {
	[m__action_types.reset]: () => {},
}

export default ms__redux_helpers.reducers.middlewares_composer([
	ms__redux_helpers.middlewares.filters_applicator([
		ms__redux_helpers.reducers.tokens_checker(m__tokens),
	]),
	ms__redux_helpers.middlewares.reducers_applicator([
		ms__redux_helpers.reducers.reducers_selector(reducers),
		ms__redux_helpers.reducers.reducers_combiner({
			[ms__tokens__kanban_board.token]: m__reducer__kanban_board,
		}),
	]),
])
