
import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
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
			add: () => {
				return m__actions__tasks.create({
					column_id: object.props.id,
				})
			},
			rename: ({
				name,
			}) => {
				return m__actions__columns.update({
					id: object.props.id,
					name,
				})
			},
			sort: () => {
				return m__actions__columns.sort({
					id: object.props.id,
				})
			},
		}),
	})
}

export default component

component.displayName = ['c', d__component.displayName].join('.')
