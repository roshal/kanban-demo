
import m__action_types from './action-types'
import m__tokens from './tokens'


export const reset = ({
	column_id,
}) => {
	return {
		tokens: m__tokens,
		type: m__action_types.reset,
		payload: {
			column_id,
		},
	}
}
