
const p__react_redux = require('react-redux')
const p__redux = require('redux')

const m__actions__columns = require('~/redux/kanban-board/columns/actions')
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
)(m__component)
