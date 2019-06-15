
import p__react from 'react'
import p__react_hot_loader__root from 'react-hot-loader/root'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'
import * as ps__react_redux from 'react-redux'

import m__container__kanban_board from '~/containers/kanban-board'
import m__store from '~/commons/store'

import * as ms__redux__tokens from '~/redux/tokens'


const $ = p__react_hyperscript

const load_state = () => {
	try {
		const string = window.localStorage.getItem(ms__redux__tokens.token)
		if (string === null) {
			return undefined
		}
		return JSON.parse(string)
	} catch (error) {
		console.warn(error)
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
				store: m__store(this.immutable),
			}, [
				$(m__container__kanban_board),
			]),
		][0]
	}
}

export default p__react_hot_loader__root.hot(component)
