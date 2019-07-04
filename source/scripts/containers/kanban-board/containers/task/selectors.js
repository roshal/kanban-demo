
import * as m__react_redux from '~/helpers/react-redux'

import d__select__tasks from '~/redux/kanban-board/tasks/select'


export const selector = () => {
	return m__react_redux.create_shallow_selector(
		(state, {
			id,
		}) => ({
			tasks: d__select__tasks(state),
			id,
		}),
		({
			tasks,
			id,
		}) => {
			const task = tasks.find((task) => {
				return id === task.get('id')
			})
			const name = task.get('name')
			const text = task.get('text')
			return {
				name,
				text,
			}
		},
	)
}
