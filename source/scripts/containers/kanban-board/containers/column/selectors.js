
import * as p__reselect from 'reselect'

import d__select__columns from '~/redux/kanban-board/columns/select'
import d__select__tasks from '~/redux/kanban-board/tasks/select'


export const selector = () => {
	return p__reselect.createSelector(
		(state, {
			id,
		}) => ({
			columns: d__select__columns(state),
			tasks: d__select__tasks(state),
			id,
		}),
		({
			columns,
			tasks,
			id,
		}) => {
			const column = columns.find((column) => {
				return column.get('id') === id
			})
			const name = column.get('name')
			const sorting = column.get('sorting')
			tasks = tasks.filter((task) => {
				return id === task.get('column_id')
			})
			if (sorting) {
				tasks = tasks.sortBy((task) => {
					return task.get('name')
				})
				if (sorting < 0) {
					tasks = tasks.reverse()
				}
			}
			tasks = tasks.map((task) => {
				return {
					id: task.get('id'),
				}
			})
			return {
				name,
				sorting,
				tasks,
			}
		},
	)
}
