
import m__action_types from './action-types'
import m__keys from './keys'
import m__state from './state'

import * as ms__redux__helpers from '~/redux/helpers'

const reducers = {
	[m__action_types.sort]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.get('id') === action.payload.id
		})
		return state.update(index, (value) => {
			return value.update('sorting', (value) => {
				return (value + 2) % 3 - 1
			})
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
		return state
	},
}

export default (state = m__state, action) => {
	state = ms__redux__helpers.curry(action, m__keys, reducers)(state, action)
	return state
}
