
import * as m__react_redux from '~/helpers/react-redux'

import d__select__columns from '~/redux/kanban-board/columns/select'
import d__select__tasks from '~/redux/kanban-board/tasks/select'


export const selector = () => {
	return m__react_redux.create_shallow_selector(
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
			const task = tasks.find((task) => {
				return id === task.id
			})
			const column_id = task.column_id
			const index = columns.findIndex((column) => {
				return column.id === column_id
			})
			columns = columns.map((column) => {
				return {
					id: column.id,
					name: column.name,
				}
			})
			columns.splice(index, 1)
			return {
				columns,
			}
		},
	)
}
