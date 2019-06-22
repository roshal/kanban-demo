
const m__action_types = require('./action-types')
const m__token = require('./token')

exports.reset = ({
	column_id,
}) => {
	return {
		tokens: m__token.array,
		type: m__action_types.reset,
		payload: {
			column_id,
		},
	}
}
