
import * as p__redux from 'redux'

import * as m__actions__tasks from '-/redux/kanban-board/tasks/actions'

import * as m__types from './types'

export const produce = (
	props: m__types.props__container,
): p__redux.ActionCreatorsMapObject => ({
	remove: () => {
		return m__actions__tasks.remove({
			id: props.object.id,
		})
	},
	locate: (options) => {
		return m__actions__tasks.locate({
			id: props.object.id,
			column_id: options.column_id,
		})
	},
	update: (options) => {
		return m__actions__tasks.update({
			id: props.object.id,
			name: options.name,
			text: options.text,
		})
	},
})
