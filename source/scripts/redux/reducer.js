
import * as ps__redux_immutable from 'redux-immutable'

import m__action_types from './action-types'
import m__reducer__kanban_board from './kanban-board/reducer'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'
import * as ms__redux_helpers__filters from '~/redux-helpers/filters'
import * as ms__redux_helpers__middlewares from '~/redux-helpers/middlewares'
import * as ms__redux_helpers__reducers from '~/redux-helpers/reducers'
import * as ms__tokens__kanban_board from './kanban-board/tokens'


const reducers = {
	[m__action_types.reset]: () => {},
}

export default ms__redux_helpers.compose_middlewares([
	ms__redux_helpers__middlewares.apply_filters([
		ms__redux_helpers__filters.check_tokens(m__tokens),
	]),
	ms__redux_helpers__middlewares.apply_reducers([
		ms__redux_helpers__reducers.apply_reducer(reducers),
		ps__redux_immutable.combineReducers({
			[ms__tokens__kanban_board.token]: m__reducer__kanban_board,
		}),
	]),
])
