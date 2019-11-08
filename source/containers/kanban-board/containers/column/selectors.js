
import * as p__ramda from 'ramda'

import * as m__react_redux from '~/helpers/react-redux'

import d__select__columns from '~/redux/kanban-board/columns/select'
import d__select__tasks from '~/redux/kanban-board/tasks/select'


export const selector = () => {
	const order = [
		'name',
		'text',
	].map((value) => {
		return p__ramda.prop(value)
	})
	const sort = (sorting, tasks) => {
		if (0 === sorting) {
			return tasks
		}
		if (0 < sorting) {
			sorting = order.map((value) => {
				return p__ramda.ascend(value)
			})
		} else {
			sorting = order.map((value) => {
				return p__ramda.descend(value)
			})
		}
		return p__ramda.sortWith(sorting, tasks)
	}
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
			const column = columns.find((column) => {
				return column.id === id
			})
			const name = column.name
			const sorting = column.sorting
			tasks = tasks.filter((task) => {
				return id === task.column_id
			})
			tasks = sort(sorting, tasks)
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
