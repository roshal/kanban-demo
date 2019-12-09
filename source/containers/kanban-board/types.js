
import i__prop_types from 'prop-types'


export const component_props = {
	state: i__prop_types.shape({
		columns: i__prop_types.arrayOf(i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		})).isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		reset: i__prop_types.func.isRequired,
	}).isRequired,
}
