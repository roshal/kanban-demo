
import * as p__ramda from 'ramda'
import * as p__react_redux from 'react-redux'
import * as p__redux from 'redux'


export const use_dispatch = (actions) => {
	const dispatch = p__react_redux.useDispatch()
	return p__redux.bindActionCreators(actions, dispatch)
}

export const use_state = (selector, object) => {
	const select = selector()
	return p__react_redux.useSelector((state) => {
		return select(state, object)
	}, p__ramda.equals)
}
