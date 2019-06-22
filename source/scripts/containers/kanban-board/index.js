
const p__react_redux = require('react-redux')
const p__redux = require('redux')

const m__actions = require('~/redux/actions')
const m__component = require('./component')
const m__selectors = require('./selectors')

module.exports = p__react_redux.connect(
	(state) => {
		return m__selectors.select(state)
	},
	(dispatch) => {
		return {
			actions: p__redux.bindActionCreators(m__actions, dispatch),
		}
	},
)(m__component)
