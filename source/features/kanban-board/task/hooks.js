
import i__react from 'react'


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
			remove: () => {
				return m__actions__tasks.remove({
					id: props.id,
				})
			},
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: props.id,
					column_id,
				})
			},
			update: ({
				name,
				text,
			}) => {
				return m__actions__tasks.update({
					id: props.id,
					name,
					text,
				})
			},
		}),
	})
})

component.displayName = ['c', d__component.displayName].join('.')


export default component
