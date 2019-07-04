
import * as p__redux from 'redux'

import * as m__actions__tasks from '~/redux/kanban-board/tasks/actions'
import * as m__react_redux from '~/helpers/react-redux'
import * as m__selectors from './selectors'

import d__component from './component'


export default m__react_redux.connect(
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
			locate: ({
				column_id,
			}) => {
				return m__actions__tasks.locate({
					id: props.id,
					column_id,
				})
			},
		}, dispatch)
	},
)(d__component)
