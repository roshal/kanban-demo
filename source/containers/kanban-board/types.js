
import i__prop_types from 'prop-types'


export const props__component = {
	state: i__prop_types.shape({
		columns: i__prop_types.arrayOf(i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		})).isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		reset: i__prop_types.func.isRequired,
	}).isRequired,
}

export const props__column = {
	object: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
}
