
import m__action_types from './action-types'
import m__reducer__kanban_board from './kanban-board/reducer'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'
import * as ms__tokens__kanban_board from './kanban-board/tokens'


const reducers = {
	[m__action_types.reset]: () => {},
}

export default ms__redux_helpers.compose_middlewares([
	ms__redux_helpers.middlewares.apply_filters([
		ms__redux_helpers.filters.tokens_checker(m__tokens),
	]),
	ms__redux_helpers.middlewares.apply_reducers([
		ms__redux_helpers.reducers.selector(reducers),
		ms__redux_helpers.reducers.combiner({
			[ms__tokens__kanban_board.token]: m__reducer__kanban_board,
		}),
	]),
])
