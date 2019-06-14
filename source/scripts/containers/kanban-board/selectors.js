
import * as ps__reselect from 'reselect'

import * as ms__selectors__columns from '~/redux/kanban-board/columns/selectors'


export const select = ps__reselect.createSelector(
	(state) => ({
		columns: ms__selectors__columns.select(state),
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
