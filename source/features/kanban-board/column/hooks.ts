
import i__react from 'react'


import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__helper__react from '~/helpers/react'
import * as m__helper__react_hooks from '~/helpers/react-hooks'

import * as m__selectors from './selectors'
import * as m__types from './types'

import d__component from './component'


const component = i__react.memo((
	props: m__types.props__component,
) => {
	return d__component({
		props,
		state: m__helper__react_hooks.use_state(m__selectors.selector, {
			id: props.object.id,
		}),
		dispatch: m__helper__react_hooks.use_dispatch({
			add: () => {
				return m__actions__tasks.create({
					column_id: props.object.id,
				})
			},
			rename: ({
				name,
			}) => {
				return m__actions__columns.update({
					id: props.object.id,
					name,
				})
			},
			sort: () => {
				return m__actions__columns.sort({
					id: props.object.id,
				})
			},
		}),
	})
})

component.displayName = m__helper__react.get_container_name(d__component.displayName)


export default component
