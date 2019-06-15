
import m__action_types from './action-types'
import m__tokens from './tokens'


export default {
	sort: ({
		id,
	}) => {
		return {
			tokens: m__tokens,
			type: m__action_types.sort,
			payload: {
				id,
			},
		}
	},
	update: ({
		id,
		name,
	}) => {
		return {
			tokens: m__tokens,
			type: m__action_types.update,
			payload: {
				id,
				name,
			},
		}
	},
}
