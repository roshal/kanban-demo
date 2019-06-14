
import m__action_types from './action-types'
import m__keys from './keys'

export default {
	sort: ({
		id,
	}) => {
		return {
			type: m__action_types.sort,
			payload: {
				id,
			},
			keys: m__keys,
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
			keys: m__keys,
		}
	},
}
