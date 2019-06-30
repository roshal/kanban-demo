
import * as p__immutable from 'immutable'
import * as p__reselect from 'reselect'

import * as m__selectors__columns from '~/redux/kanban-board/columns/selectors'


export const selector = () => {
	return p__reselect.createSelector(
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
}
