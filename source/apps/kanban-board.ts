
import * as p__react from 'react'
import * as p__react_redux from 'react-redux'
import i__react_hyperscript from 'react-hyperscript'

import * as m__local_storage from '~/commons/local-storage'
import d__kanban_board from '~/features/kanban-board'
import d__redux_store from '~/commons/redux-store'

const $ = i__react_hyperscript

const component = () => {
	const store = p__react.useMemo(() => {
		const storage = m__local_storage.deserialize()
		return d__redux_store(storage)
	}, [])
	return [
		$(p__react_redux.Provider, {
			store,
		}, [
			$(d__kanban_board),
		]),
	][0]
}

component.displayName = 'app'

export default component
