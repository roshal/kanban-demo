
import * as p__immutable from 'immutable'

import * as m__middlewares from '~/helpers/redux/middlewares'
import * as m__reducers from '~/helpers/redux/reducers'

import * as m__action_types from './action-types'
import * as m__token from './token'
import d__state from './state'

const reducers = {
	[m__action_types.create]: (state, action) => {
		const value = p__immutable.Map({
			id: Date.now(),
			column_id: action.payload.column_id,
			name: '',
			text: '',
		})
		return state.insert(0, value)
	},
	[m__action_types.remove]: (state, action) => {
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

const reduce = m__reducers.middlewares_composer([
	m__middlewares.state_initializer(d__state),
	m__middlewares.filters_applicator([
		m__reducers.tokens_checker(m__token.array),
	]),
	m__middlewares.reducers_applicator([
		m__reducers.reducers_selector(reducers),
	]),
])

export default reduce
