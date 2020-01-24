
import * as m__react_redux from '~/helpers/react-redux'

import d__select__tasks from '~/redux/kanban-board/tasks/select'


export const selector = () => {
	return m__react_redux.create_shallow_selector(
		(state: {}, {
			id,
		}: {
			id: number,
		}) => ({
			tasks: d__select__tasks(state),
			id,
		}),
		({
			tasks,
			id,
		}) => {
			const task = tasks.find((task) => {
				return id === task.id
			})
			const name = task.name
			const text = task.text
			return {
				name,
				text,
			}
		},
	)
}
