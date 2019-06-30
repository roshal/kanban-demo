
import * as p__react_redux from 'react-redux'


export const connect = (cast_state, cast_dispatch) => {
	return p__react_redux.connect(
		cast_state,
		cast_dispatch,
		(state, dispatch, props) => {
			return {
				props,
				state,
				dispatch,
			}
		},
	)
}
