
import * as p__react_redux from 'react-redux'
import * as p__redux from 'redux'

import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__selectors from './selectors'

import d__component from './component'


export default p__react_redux.connect(
	(state, props) => {
		return m__selectors.select({
			state,
			id: props.id,
		})
	},
	(dispatch, props) => {
		const actions = p__redux.bindActionCreators({
			remove: () => {
				return m__actions__tasks.remove({
					id: props.id,
				})
			},
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: props.id,
					column_id,
				})
			},
			update: ({
				name,
				text,
			}) => {
				return m__actions__tasks.update({
					id: props.id,
					name,
					text,
				})
			},
		}, dispatch)
		return {
			actions,
		}
	},
)(d__component)
