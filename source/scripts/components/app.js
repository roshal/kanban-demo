
import p__react from 'react'
import p__react_hot_loader__root from 'react-hot-loader/root'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__react_redux from 'react-redux'

import m__containers__kanban_board from '~/containers/kanban-board'
import m__redux__store from '~/redux/store'

const $ = p__react_hyperscript

const component = class extends p__react.PureComponent {
	static displayName = 'app'
	render = () => {
		return [
			$(ps__react_redux.Provider, {
				store: m__redux__store(),
			}, [
				$(m__containers__kanban_board),
			]),
		][0]
	}
}

export default p__react_hot_loader__root.hot(component)
