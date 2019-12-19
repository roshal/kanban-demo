
import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'

export const produce = ({
	props,
}) => ({
	add: () => {
		return m__actions__tasks.create({
			column_id: props.object.id,
		})
	},
	rename: ({
		name,
	}) => {
		return m__actions__columns.update({
			id: props.object.id,
			name,
		})
	},
	sort: () => {
		return m__actions__columns.sort({
			id: props.object.id,
		})
	},
})
