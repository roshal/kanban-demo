
import m__action_types from './action-types'
import m__keys from './keys'

export default {
	reset: ({
		column_id,
	}) => {
		return {
			type: m__action_types.reset,
			payload: {
				column_id,
			},
			keys: m__keys,
		}
	},
}
