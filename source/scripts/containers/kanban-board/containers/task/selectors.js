
import * as p__reselect from 'reselect'

import * as m__selectors__columns from '~/redux/kanban-board/columns/selectors'
import * as m__selectors__tasks from '~/redux/kanban-board/tasks/selectors'


export const select = p__reselect.createSelector(
	({
		state,
		id,
	}) => ({
		columns: m__selectors__columns.select(state),
		tasks: m__selectors__tasks.select(state),
		id,
	}),
	({
		columns,
		tasks,
		id,
	}) => {
		const task = tasks.find((task) => {
			return id === task.get('id')
		})
		const name = task.get('name')
		const text = task.get('text')
		const column_id = task.get('column_id')
		const index = columns.findIndex((column) => {
			return column.get('id') === column_id
		})
		columns = columns.delete(index)
		columns = columns.map((column) => {
			return {
				id: column.get('id'),
				name: column.get('name'),
			}
		})
		return {
			name,
			text,
			columns,
		}
	},
)
