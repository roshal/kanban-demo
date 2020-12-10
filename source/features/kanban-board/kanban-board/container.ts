
import * as p__react from 'react'

import * as m__actions from '-/redux/actions'
import * as m__helper__react from '-/helpers/react'
import * as m__helper__react_hooks from '-/helpers/react-hooks'

import * as m__selectors from './selectors'
import * as m__types from './types'
import d__component from './component'

const container = p__react.memo((
	props: m__types.props__container,
) => {
	return d__component({
		state: m__helper__react_hooks.use_state(m__selectors.selector),
		dispatch: m__helper__react_hooks.use_dispatch({
			reset: m__actions.reset,
		}),
	})
})

container.displayName = m__helper__react.get_container_name(d__component.displayName)

export default container
