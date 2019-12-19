
import * as p__redux from 'redux'

import * as m__actions__columns from '~/redux/kanban-board/columns/actions'
import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__react_redux from '~/helpers/react-redux'
import * as m__selectors from './selectors'

import d__component from './component'


export default m__react_redux.connect(
	() => {
		const select = m__selectors.selector()
		return (state, props) => {
			return select(state, {
				id: props.object.id,
			})
		}
	},
	(dispatch, props) => {
		return p__redux.bindActionCreators({
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
		}, dispatch)
	},
)(d__component)
