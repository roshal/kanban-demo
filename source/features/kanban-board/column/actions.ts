
import * as p__redux from 'redux'


import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'

import * as m__types from './types'


export const produce = (
	props: m__types.props__container,
): p__redux.ActionCreatorsMapObject => ({
	add: () => {
		return m__actions__tasks.create({
			column_id: props.object.id,
		})
	},
	rename: (options) => {
		return m__actions__columns.update({
			id: props.object.id,
			name: options.name,
		})
	},
	sort: () => {
		return m__actions__columns.sort({
			id: props.object.id,
		})
	},
})
