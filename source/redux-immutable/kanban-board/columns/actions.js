
import * as m__action_types from './action-types'
import * as m__token from './token'

export const sort = ({
	id,
}) => {
	return {
		tokens: m__token,
		type: m__action_types.sort,
		payload: {
			id,
		},
	}
}

export const update = ({
	id,
	name,
}) => {
	return {
		tokens: m__token,
		type: m__action_types.update,
		payload: {
			id,
			name,
		},
	}
}
