
import * as m__react_redux from '~/helpers/react-redux'

import d__select__columns from '~/redux/kanban-board/columns/select'


export const selector = () => {
	return m__react_redux.create_shallow_selector(
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
