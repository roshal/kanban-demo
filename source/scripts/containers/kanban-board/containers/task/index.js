
const p__react_redux = require('react-redux')
const p__redux = require('redux')

const m__actions__tasks = require('~/redux/kanban-board/tasks/actions')
const m__component = require('./component')
const m__selectors = require('./selectors')

module.exports = p__react_redux.connect(
	(state, props) => {
		return m__selectors.select({
			state,
			id: props.id,
		})
	},
	(dispatch, props) => {
		const actions = p__redux.bindActionCreators({
			delete: () => {
				return m__actions__tasks.delete({
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
)(m__component)
