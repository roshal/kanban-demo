
import * as ps__redux from 'redux'

import m__action_types from './action-types'
import m__state from './state'

const reducers = {
	[m__action_types.sort]: (state, action) => {
		const index = state.findIndex((object) => {
			return object.get('id') === action.payload.id
		})
		return state.update(index, (object) => {
			return object.update('sorting', (value) => {
				return (value + 2) % 3 - 1
			})
		})
	},
	[m__action_types.update]: (state, action) => {
		const index = state.findIndex((object) => {
			return object.get('id') === action.payload.id
		})
		if (typeof action.payload.name !== 'undefined') {
			state = state.update(index, (object) => {
				return object.set('name', action.payload.name)
			})
		}
		return state
	},
}

export default (
	state = m__state,
	action,
) => {
	if (action.type in reducers) {
		return reducers[action.type](state, action)
	}
	return state
}
