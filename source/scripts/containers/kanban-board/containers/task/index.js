
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__hooks from '~/redux-helpers/hooks'
import * as m__selectors from './selectors'

import d__component from './component'

import i__react_hyperscript from 'react-hyperscript'


const $ = i__react_hyperscript

const component = (object) => {
	return $(d__component, {
		values: m__hooks.use_values(m__selectors.selector, {
			id: object.props.id,
		}),
		actions: m__hooks.use_actions({
			remove: () => {
				return m__actions__tasks.remove({
					id: object.props.id,
				})
			},
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: object.props.id,
					column_id,
				})
			},
			update: ({
				name,
				text,
			}) => {
				return m__actions__tasks.update({
					id: object.props.id,
					name,
					text,
				})
			},
		}),
	})
}

export default component

component.displayName = ['c', d__component.displayName].join('.')
