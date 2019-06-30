
import * as p__reselect from 'reselect'

import d__select__columns from '~/redux/kanban-board/columns/select'


export const selector = () => {
	return p__reselect.createSelector(
		(state) => ({
			columns: d__select__columns(state),
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
}
