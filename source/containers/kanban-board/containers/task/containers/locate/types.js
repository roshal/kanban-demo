
import i__prop_types from 'prop-types'


export const component_props = {
	props: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
		close: i__prop_types.func.isRequired,
	}).isRequired,
	state: i__prop_types.shape({
		columns: i__prop_types.arrayOf(i__prop_types.shape({
			name: i__prop_types.string.isRequired,
		})).isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		locate: i__prop_types.func.isRequired,
	}).isRequired,
}
