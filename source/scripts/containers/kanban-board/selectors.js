
const p__reselect = require('reselect')

const m__selectors__columns = require('~/redux/kanban-board/columns/selectors')

exports.select = p__reselect.createSelector(
	(state) => ({
		columns: m__selectors__columns.select(state),
	}),
	({
		columns,
	}) => {
		columns = columns.map((column) => {
			return {
				id: column.get('id'),
			}
		})
		return {
			columns,
		}
	},
)
