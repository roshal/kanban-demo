
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'

export const produce = ({
	props,
}) => ({
	locate: ({
		column_id,
	}) => {
		return m__actions__tasks.locate({
			id: props.object.id,
			column_id,
		})
	},
})
