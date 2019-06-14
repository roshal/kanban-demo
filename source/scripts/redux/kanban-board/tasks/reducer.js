
import * as ps__immutable from 'immutable'

import m__action_types from './action-types'
import m__keys from './keys'
import m__state from './state'

import * as ms__redux__helpers from '~/redux/helpers'

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
		const index = state.findIndex((value) => {
			return value.get('id') === action.payload.id
		})
		return state.delete(index)
	},
	[m__action_types.locate]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.get('id') === action.payload.id
		})
		return state.update(index, (value) => {
			return value.set('column_id', action.payload.column_id)
		})
	},
	[m__action_types.update]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.get('id') === action.payload.id
		})
		if (typeof action.payload.name !== 'undefined') {
			state = state.update(index, (value) => {
				return value.set('name', action.payload.name)
			})
		}
		if (typeof action.payload.text !== 'undefined') {
			state = state.update(index, (value) => {
				return value.set('text', action.payload.text)
			})
		}
		return state
	},
}

export default (state = m__state, action) => {
	state = ms__redux__helpers.curry(action, m__keys, reducers)(state, action)
	return state
}
