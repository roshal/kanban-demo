
import m__action_types from './action-types'
import m__state from './state'
import m__tokens from './tokens'

import * as ms__redux_helpers from '~/redux-helpers'


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

export default ms__redux_helpers.compose_middlewares([
	ms__redux_helpers.middlewares.apply_filters([
		ms__redux_helpers.filters.check_tokens(m__tokens),
	]),
	ms__redux_helpers.middlewares.apply_reducers([
		ms__redux_helpers.reducers.selector(reducers),
	]),
], m__state)
