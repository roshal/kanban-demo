
import * as p__redux from 'redux'

import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__helpers__react_redux from '~/helpers/react-redux'
import * as m__selectors from './selectors'

import d__component from './component'


export default m__helpers__react_redux.connect(
	() => {
		const select = m__selectors.selector()
		return (state, props) => {
			return select(state, {
				id: props.id,
			})
		}
	},
	(dispatch, props) => {
		return p__redux.bindActionCreators({
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
	},
)(d__component)
