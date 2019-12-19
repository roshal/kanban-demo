
import * as p__react_redux from 'react-redux'

import i__react_hot_loader__root from 'react-hot-loader/root'
// https://github.com/gaearon/react-hot-loader#getting-started
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__local_storage from '~/commons/local-storage'

import d__container__kanban_board from '~/containers/kanban-board'
import d__redux_store from '~/commons/redux-store'


const $ = i__react_hyperscript

const component = () => {
	const store = i__react.useMemo(() => {
		const storage = m__local_storage.deserialize()
		return d__redux_store(storage)
	}, [])
	return [
		$(p__react_redux.Provider, {
			store,
		}, [
			$(d__container__kanban_board),
		]),
	][0]
}

component.displayName = 'app'


export default i__react_hot_loader__root.hot(component)
