
import * as p__react_redux from 'react-redux'
import * as p__reselect from 'reselect'


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

export const create_shallow_selector = p__reselect.createSelectorCreator(
	p__reselect.defaultMemoize,
	p__react_redux.shallowEqual,
)

export const shallow_memoize = (handle) => {
	return p__reselect.defaultMemoize(handle, p__react_redux.shallowEqual)
}
