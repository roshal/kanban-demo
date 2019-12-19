
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'


export const produce = ({
	props,
}) => ({
	remove: () => {
		return m__actions__tasks.remove({
			id: props.object.id,
		})
	},
	locate: ({
		column_id,
	}) => {
		return m__actions__tasks.locate({
			id: props.object.id,
			column_id,
		})
	},
	update: ({
		name,
		text,
	}) => {
		return m__actions__tasks.update({
			id: props.object.id,
			name,
			text,
		})
	},
})
