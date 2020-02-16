
import * as p__react from 'react'


import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__helper__react from '~/helpers/react'
import * as m__helper__react_hooks from '~/helpers/react-hooks'

import * as m__selectors from './selectors'
import * as m__types from './types'

import d__component from './component'


const container = p__react.memo((
	props: m__types.props__container,
) => {
	return d__component({
		object: props.object,
		state: m__helper__react_hooks.use_state(m__selectors.selector, {
			id: props.object.id,
		}),
		dispatch: m__helper__react_hooks.use_dispatch({
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: props.object.id,
					column_id,
				})
			},
		}),
		callbacks: props.callbacks,
	})
})

container.displayName = m__helper__react.get_container_name(d__component.displayName)

export default container
