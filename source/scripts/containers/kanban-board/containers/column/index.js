
import * as p__react_redux from 'react-redux'
import * as p__redux from 'redux'

import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
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
			add: () => {
				return m__actions__tasks.create({
					column_id: props.id,
				})
			},
			rename: ({
				name,
			}) => {
				return m__actions__columns.update({
					id: props.id,
					name,
				})
			},
			sort: () => {
				return m__actions__columns.sort({
					id: props.id,
				})
			},
		}, dispatch)
		return {
			actions,
		}
	},
)(d__component)
