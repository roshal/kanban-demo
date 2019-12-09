
import i__react from 'react'

import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__react_hooks from '~/helpers/react-hooks'
import * as m__selectors from './selectors'

import d__component from './component'


const component = i__react.memo((props) => {
	return d__component({
		props,
		state: m__react_hooks.use_state(m__selectors.selector, {
			id: props.id,
		}),
		dispatch: m__react_hooks.use_dispatch({
			add: () => {
				return m__actions__tasks.create({
					column_id: props.id,
				})
			},
			rename: ({
				name,
			}) => {
				return m__actions__columns.update({
					id: props.id,
					name,
				})
			},
			sort: () => {
				return m__actions__columns.sort({
					id: props.id,
				})
			},
		}),
	})
})

component.displayName = ['c', d__component.displayName].join('.')


export default component
