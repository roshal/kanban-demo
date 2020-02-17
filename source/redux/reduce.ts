
import * as p__immer from 'immer'
import * as p__redux from 'redux'

import * as m__actions from '~/helpers/redux/actions'

import * as m__action_types from './action-types'
import * as m__token__kanban_board from './kanban-board/token'
import d__reduce__kanban_board from './kanban-board/reduce'

const mutations = {
	[m__action_types.reset]: (state, action) => {
		return {}
	},
}

const mutate = m__actions.selector(mutations)

const produce = p__immer.produce(mutate)

const reduce_all = p__redux.combineReducers({
	[m__token__kanban_board.value]: d__reduce__kanban_board,
})

const reduce = (state, action) => {
	state = produce(state, action)
	return reduce_all(state, action)
}

export default reduce
