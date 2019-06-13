
import m__action_types from './action-types'

export default {
	create: ({
		column_id,
	}) => {
		return {
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
			type: m__action_types.update,
			payload: {
				id,
				name,
				text,
			},
		}
	},
}
