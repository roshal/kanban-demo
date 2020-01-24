
import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'

import * as m__types from './types'


export const produce = ({
	props,
}: {
	props: m__types.props__component,
}) => ({
	add: () => {
		return m__actions__tasks.create({
			column_id: props.object.id,
		})
	},
	rename: ({
		name,
	}: ({
		name: string,
	})) => {
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
