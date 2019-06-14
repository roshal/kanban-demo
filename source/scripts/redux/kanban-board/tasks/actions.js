
import m__action_types from './action-types'
import m__keys from './keys'


export default {
	create: ({
		column_id,
	}) => {
		return {
			type: m__action_types.create,
			payload: {
				column_id,
			},
			keys: m__keys,
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
			keys: m__keys,
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
			keys: m__keys,
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
			keys: m__keys,
		}
	},
}
