
const m__action_types = require('./action-types')
const m__token = require('./token')

exports.create = ({
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

exports.delete = ({
	id,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.delete,
		payload: {
			id,
		},
	}
}

exports.locate = ({
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

exports.update = ({
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
