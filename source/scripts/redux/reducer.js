
import * as ps__redux_immutable from 'redux-immutable'

import m__action_types from './action-types'
import m__reducer__kanban_board from './kanban-board/reducer'
import m__tokens from './tokens'

import * as ms__helpers from '~/helpers'
import * as ms__helpers__filters from '~/helpers/filters'
import * as ms__helpers__middlewares from '~/helpers/middlewares'
import * as ms__helpers__reducers from '~/helpers/reducers'
import * as ms__tokens__kanban_board from './kanban-board/tokens'


const reducers = {
	[m__action_types.reset]: () => {},
}

export default ms__helpers.compose_middlewares([
	ms__helpers__middlewares.apply_filters([
		ms__helpers__filters.check_tokens(m__tokens),
	]),
	ms__helpers__middlewares.compose_reducers([
		ms__helpers__reducers.apply_reducers(reducers),
		ps__redux_immutable.combineReducers({
			[ms__tokens__kanban_board.token]: m__reducer__kanban_board,
		}),
	]),
])
