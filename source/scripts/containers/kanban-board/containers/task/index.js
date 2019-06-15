
import * as ps__react_redux from 'react-redux'
import * as ps__redux from 'redux'

import m__component from './component'

import * as ms__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as ms__selectors from './selectors'


export default ps__react_redux.connect(
	(state, props) => {
		return ms__selectors.select({
			state,
			id: props.id,
		})
	},
	(dispatch, props) => {
		const actions = ps__redux.bindActionCreators({
			remove: () => {
				return ms__actions__tasks.remove({
					id: props.id,
				})
			},
			locate: ({
				column_id,
			}) => {
				return ms__actions__tasks.locate({
					id: props.id,
					column_id,
				})
			},
			update: ({
				name,
				text,
			}) => {
				return ms__actions__tasks.update({
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
)(m__component)
