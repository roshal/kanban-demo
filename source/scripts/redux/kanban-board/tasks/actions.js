
import m__action_types from './action-types'
import m__tokens from './tokens'


export const create = ({
	column_id,
}) => {
	return {
		tokens: m__tokens,
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
		tokens: m__tokens,
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
		tokens: m__tokens,
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
		tokens: m__tokens,
		type: m__action_types.update,
		payload: {
			id,
			name,
			text,
		},
	}
}
