
import * as m__action_types from './action-types'
import * as m__middlewares from '~/helpers/redux/middlewares'
import * as m__reducers from '~/helpers/redux/reducers'
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


export default m__reducers.middlewares_composer([
	m__middlewares.state_initializer(d__state),
	m__middlewares.filters_applicator([
		m__reducers.tokens_checker(m__token.array),
	]),
	m__middlewares.reducers_applicator([
		m__reducers.reducers_selector(reducers),
	]),
])
