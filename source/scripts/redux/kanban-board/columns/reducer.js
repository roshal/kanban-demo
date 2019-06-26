
import * as m__action_types from './action-types'
import * as m__redux_helpers from '~/redux-helpers'
import * as m__token from './token'

import d__state from './state'


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

export default m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.state_initializer(d__state),
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token.array),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_selector(reducers),
	]),
])
