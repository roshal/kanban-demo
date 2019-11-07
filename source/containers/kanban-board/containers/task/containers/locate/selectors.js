
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
				return id === task.get('id')
			})
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
				columns,
			}
		},
	)
}
