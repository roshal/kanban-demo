
import i__prop_types from 'prop-types'


export const props__component = {
	object: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
	state: i__prop_types.shape({
		name: i__prop_types.string.isRequired,
		sorting: i__prop_types.oneOf([
			-1, 0, 1,
		]),
		tasks: i__prop_types.arrayOf(i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		})).isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		add: i__prop_types.func.isRequired,
		rename: i__prop_types.func.isRequired,
		sort: i__prop_types.func.isRequired,
	}).isRequired,
}

export const props__task = {
	object: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
}
