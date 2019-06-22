
const p__immutable = require('immutable')
const p__react = require('react')
const p__react_hot_loader__root = require('react-hot-loader/root')
const p__react_hyperscript = require('react-hyperscript')
const p__react_redux = require('react-redux')

const m__container__kanban_board = require('~/containers/kanban-board')
const m__local_storage = require('~/commons/local-storage')
const m__redux_store = require('~/commons/redux-store')

const $ = p__react_hyperscript

const component = class extends p__react.PureComponent {
	static displayName = 'app'
	componentWillMount() {
		const state = m__local_storage.deserialize()
		this.immutable = p__immutable.fromJS(state)
	}
	render() {
		return [
			$(p__react_redux.Provider, {
				store: m__redux_store(this.immutable),
			}, [
				$(m__container__kanban_board),
			]),
		][0]
	}
}

module.exports = p__react_hot_loader__root.hot(component)
