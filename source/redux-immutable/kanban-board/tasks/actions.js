
import * as m__action_types from './action-types'
import * as m__token from './token'


export const create = ({
	column_id,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.create,
		payload: {
			column_id,
		},
	}
}

export const remove = ({
	id,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.remove,
		payload: {
			id,
		},
	}
}

export const locate = ({
	id,
	column_id,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.locate,
		payload: {
			id,
			column_id,
		},
	}
}

export const update = ({
	id,
	name,
	text,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.update,
		payload: {
			id,
			name,
			text,
		},
	}
}
