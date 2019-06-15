
import * as ps__react_redux from 'react-redux'
import * as ps__redux from 'redux'

import m__component from './component'

import * as ms__actions__columns from '~/redux/kanban-board/columns/actions'
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
			add: () => {
				return ms__actions__tasks.create({
					column_id: props.id,
				})
			},
			rename: ({
				name,
			}) => {
				return ms__actions__columns.update({
					id: props.id,
					name,
				})
			},
			sort: () => {
				return ms__actions__columns.sort({
					id: props.id,
				})
			},
		}, dispatch)
		return {
			actions,
		}
	},
)(m__component)
