
import * as m__action_types from './action-types'

export const sort = ({
	id,
}) => {
	return {
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
		type: m__action_types.update,
		payload: {
			id,
			name,
		},
	}
}
