
const p__immutable = require('immutable')

const m__action_types = require('./action-types')
const m__redux_helpers = require('~/redux-helpers')
const m__state = require('./state')
const m__token = require('./token')

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

module.exports = m__redux_helpers.reducers.middlewares_composer([
	m__redux_helpers.middlewares.state_initializer(m__state),
	m__redux_helpers.middlewares.filters_applicator([
		m__redux_helpers.reducers.tokens_checker(m__token.array),
	]),
	m__redux_helpers.middlewares.reducers_applicator([
		m__redux_helpers.reducers.reducers_selector(reducers),
	]),
])
