
import * as p__immer from 'immer'


import * as m__actions from '~/helpers/redux/actions'

import * as m__action_types from './action-types'

import d__state from './state'


const mutations = {
	[m__action_types.create]: (state, action) => {
		const value = {
			id: Date.now(),
			column_id: action.payload.column_id,
			name: '',
			text: '',
		}
		state.unshift(value)
	},
	[m__action_types.remove]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.id === action.payload.id
		})
		state.splice(index, 1)
	},
	[m__action_types.locate]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.id === action.payload.id
		})
		state[index].column_id = action.payload.column_id
	},
	[m__action_types.update]: (state, action) => {
		const index = state.findIndex((value) => {
			return value.id === action.payload.id
		})
		if (typeof action.payload.name !== 'undefined') {
			state[index].name = action.payload.name
		}
		if (typeof action.payload.text !== 'undefined') {
			state[index].text = action.payload.text
		}
	},
}

const mutate = m__actions.selector(mutations)


export default p__immer.produce(mutate, d__state)
