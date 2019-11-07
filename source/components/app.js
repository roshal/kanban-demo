
import * as p__immutable from 'immutable'
import * as p__react_redux from 'react-redux'

import i__react from 'react'
import i__react_hot_loader__root from 'react-hot-loader/root'
import i__react_hyperscript from 'react-hyperscript'

import * as m__local_storage from '~/commons/local-storage'

import d__container__kanban_board from '~/containers/kanban-board'
import d__redux_store from '~/commons/redux-store'


const $ = i__react_hyperscript

const component = class extends i__react.PureComponent {

	static displayName = 'app'

	constructor(object) {
		super(object)
		const state = m__local_storage.deserialize()
		this.immutable = p__immutable.fromJS(state)
	}

	render() {
		return [
			$(p__react_redux.Provider, {
				store: d__redux_store(this.immutable),
			}, [
				$(d__container__kanban_board),
			]),
		][0]
	}

}


export default i__react_hot_loader__root.hot(component)
