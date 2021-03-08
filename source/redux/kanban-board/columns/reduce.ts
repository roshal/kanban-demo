
import * as p__immer from 'immer'

import * as m__actions from '-/helpers/redux/actions'

import * as m__action_types from './action-types'
import d__state from './state'

const mutations = {
	[m__action_types.sort]: (state: typeof d__state, action) => {
		const index = state.findIndex((value) => {
			return value.id === action.payload.id
		})
		state[index].sorting = (state[index].sorting + 2) % 3 - 1
	},
	[m__action_types.update]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.id === action.payload.id
		})
		if (typeof action.payload.name !== 'undefined') {
			state[index].name = action.payload.name
		}
	},
}

const mutate = m__actions.selector(mutations)

const reduce = p__immer.produce(mutate, d__state)

export default reduce
