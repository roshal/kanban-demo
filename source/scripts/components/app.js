
import p__react from 'react'
import p__react_hot_loader__root from 'react-hot-loader/root'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'
import * as ps__react_redux from 'react-redux'

import m__container__kanban_board from '~/containers/kanban-board'
import m__redux_store from '~/commons/redux-store'

import * as ms__local_storage from '~/commons/local-storage'


const $ = p__react_hyperscript

const component = class extends p__react.PureComponent {
	static displayName = 'app'
	componentWillMount() {
		const state = ms__local_storage.deserialize()
		this.immutable = ps__immutable.fromJS(state)
	}
	render() {
		return [
			$(ps__react_redux.Provider, {
				store: m__redux_store(this.immutable),
			}, [
				$(m__container__kanban_board),
			]),
		][0]
	}
}

export default p__react_hot_loader__root.hot(component)
