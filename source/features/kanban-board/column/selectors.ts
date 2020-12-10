
import * as m__react_redux from '-/helpers/react-redux'
import d__select__columns from '-/redux/kanban-board/columns/select'
import d__select__tasks from '-/redux/kanban-board/tasks/select'

import * as m__react_helpers from './helpers'

export const selector = () => {
	return m__react_redux.create_shallow_selector(
		(state: {}, {
			id,
		}: {
			id: number,
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
				return column.id === id
			})
			const name = column.name
			const sorting = column.sorting
			tasks = tasks.filter((task) => {
				return id === task.column_id
			})
			tasks = m__react_helpers.sort(sorting, tasks)
			tasks = tasks.map((task) => {
				return {
					id: task.id,
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
