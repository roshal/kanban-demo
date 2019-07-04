
import i__react from 'react'

import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__react_hooks from '~/helpers/react-hooks'
import * as m__selectors from './selectors'

import d__component from './component'

import i__react_hyperscript from 'react-hyperscript'


const $ = i__react_hyperscript

const component = i__react.memo((props) => {
	return $(d__component, {
		props,
		state: m__react_hooks.use_state(m__selectors.selector, {
			id: props.id,
		}),
		dispatch: m__react_hooks.use_dispatch({
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: props.id,
					column_id,
				})
			},
		}),
	})
})

export default component

component.displayName = ['c', d__component.displayName].join('.')
