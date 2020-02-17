
import * as p__redux from 'redux'

import * as m__react_redux from '~/helpers/react-redux'

import * as m__actions from './actions'
import * as m__selectors from './selectors'
import * as m__types from './types'
import d__component from './component'

const cast_state = 	() => {
	const select = m__selectors.selector()
	return (state: {}, props: m__types.props__container) => {
		return select(state, props.object)
	}
}

const cast_dispatch = (
	dispatch: p__redux.Dispatch, props: m__types.props__container,
) => {
	return p__redux.bindActionCreators(m__actions.produce(props), dispatch)
}

export const container = m__react_redux.connect(
	cast_state, cast_dispatch,
)(d__component)
