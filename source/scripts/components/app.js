
import p__react from 'react'
import p__react_hot_loader__root from 'react-hot-loader/root'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'
import * as ps__react_redux from 'react-redux'

import m__containers__kanban_board from '~/containers/kanban-board'
import m__redux__store from '~/redux/store'

import * as ms__redux__keys from '~/redux/keys'

const $ = p__react_hyperscript

const load_state = () => {
	try {
		const string = window.localStorage.getItem(ms__redux__keys.key)
		if (string === null) {
			return undefined
		}
		return JSON.parse(string)
	} catch (error) {
		return undefined
	}
}

const component = class extends p__react.PureComponent {
	static displayName = 'app'
	componentWillMount() {
		const state = load_state()
		this.immutable = ps__immutable.fromJS(state)
	}
	render() {
		return [
			$(ps__react_redux.Provider, {
				store: m__redux__store(this.immutable),
			}, [
				$(m__containers__kanban_board),
			]),
		][0]
	}
}

export default p__react_hot_loader__root.hot(component)
