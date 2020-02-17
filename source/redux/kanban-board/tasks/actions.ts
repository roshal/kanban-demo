
import * as m__action_types from './action-types'

export const create = ({
	column_id,
}) => {
	return {
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
		type: m__action_types.update,
		payload: {
			id,
			name,
			text,
		},
	}
}
