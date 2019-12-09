
import i__prop_types from 'prop-types'


export const component_props = {
	props: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
	state: i__prop_types.shape({
		name: i__prop_types.string.isRequired,
		text: i__prop_types.string.isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		remove: i__prop_types.func.isRequired,
		update: i__prop_types.func.isRequired,
	}).isRequired,
}
