
import * as m__action_types from './action-types'
import * as m__token from './token'

export const reset = () => {
	return {
		tokens: m__token.array,
		type: m__action_types.reset,
	}
}
