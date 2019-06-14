
import * as ps__redux_immutable from 'redux-immutable'

import m__action_types from './action-types'
import m__keys from './keys'
import m__reducers__kanban_board from './kanban-board/reducer'

import * as ms__keys__kanban_board from './kanban-board/keys'
import * as ms__redux__helpers from '~/redux/helpers'


const reducers = {
	[m__action_types.reset]: () => {},
}

const reducer = ps__redux_immutable.combineReducers({
	[ms__keys__kanban_board.key]: m__reducers__kanban_board,
})

export default (state, action) => {
	state = ms__redux__helpers.curry(action, m__keys, reducers)(state, action)
	state = reducer(state, action)
	return state
}
