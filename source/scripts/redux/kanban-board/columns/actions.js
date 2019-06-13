
import m__action_types from './action-types'

export default {
	sort: ({
		id,
	}) => {
		return {
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
			type: m__action_types.update,
			payload: {
				id,
				name,
			},
		}
	},
}
