
const p__reselect = require('reselect')

const m__selectors__columns = require('~/redux/kanban-board/columns/selectors')
const m__selectors__tasks = require('~/redux/kanban-board/tasks/selectors')

exports.select = p__reselect.createSelector(
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
