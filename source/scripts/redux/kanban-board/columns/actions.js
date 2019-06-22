
const m__action_types = require('./action-types')
const m__token = require('./token')

exports.sort = ({
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

exports.update = ({
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
