
import m__action_types from './action-types'
import m__tokens from './tokens'


export default {
	create: ({
		column_id,
	}) => {
		return {
			tokens: m__tokens,
			type: m__action_types.create,
			payload: {
				column_id,
			},
		}
	},
	delete: ({
		id,
	}) => {
		return {
			tokens: m__tokens,
			type: m__action_types.delete,
			payload: {
				id,
			},
		}
	},
	locate: ({
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
	},
	update: ({
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
	},
}
