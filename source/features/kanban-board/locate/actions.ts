
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'

import * as m__types from './types'


export const produce = ({
	props,
}: {
	props: m__types.props__component,
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
