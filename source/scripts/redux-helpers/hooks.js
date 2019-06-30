
import * as p__react_redux from 'react-redux'
import * as p__redux from 'redux'

export const use_actions = function (actions) {
	const dispatch = p__react_redux.useDispatch()
	return p__redux.bindActionCreators(actions, dispatch)
}

export const use_values = function (selector, object) {
	const select = selector()
	return p__react_redux.useSelector((state) => {
		return select(state, object)
	}, p__react_redux.shallowEqual)
}
