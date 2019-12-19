
import i__prop_types from 'prop-types'


export const props__component = {
	object: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
	state: i__prop_types.shape({
		columns: i__prop_types.arrayOf(i__prop_types.shape({
			name: i__prop_types.string.isRequired,
		})).isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		locate: i__prop_types.func.isRequired,
	}).isRequired,
	callbacks: i__prop_types.shape({
		close: i__prop_types.func.isRequired,
	}),
}

export const props__column = {
	object: i__prop_types.shape({
		id: i__prop_types.number.isRequired,
	}).isRequired,
	dispatch: i__prop_types.shape({
		locate: i__prop_types.func.isRequired,
	}).isRequired,
	callbacks: i__prop_types.shape({
		close: i__prop_types.func.isRequired,
	}),
}
