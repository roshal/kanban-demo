
import * as p__redux from 'redux'

import * as m__actions__tasks from '-/redux/kanban-board/tasks/actions'

import * as m__types from './types'

export const produce = (
	props: m__types.props__container,
): p__redux.ActionCreatorsMapObject => ({
	locate: (options) => {
		return m__actions__tasks.locate({
			id: props.object.id,
			column_id: options.column_id,
		})
	},
})
