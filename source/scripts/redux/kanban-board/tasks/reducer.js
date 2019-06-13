
import * as ps__immutable from 'immutable'
import * as ps__redux from 'redux'

import m__action_types from './action-types'
import m__state from './state'

const reducers = {
	[m__action_types.create]: (state, action) => {
		const value = ps__immutable.Map({
			id: Date.now(),
			column_id: action.payload.column_id,
			name: '',
			text: '',
		})
		return state.insert(0, value)
	},
	[m__action_types.delete]: (state, action) => {
		const index = state.findIndex((object) => {
			return object.get('id') === action.payload.id
		})
		return state.delete(index)
	},
	[m__action_types.locate]: (state, action) => {
		const index = state.findIndex((object) => {
			return object.get('id') === action.payload.id
		})
		return state.update(index, (object) => {
			return object.set('column_id', action.payload.column_id)
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
		if (typeof action.payload.text !== 'undefined') {
			state = state.update(index, (object) => {
				return object.set('text', action.payload.text)
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
