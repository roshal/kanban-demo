
import * as p__redux from 'redux'

import * as m__local_storage from '~/commons/local-storage'
import * as m__windows from '~/commons/windows'
import d__reduce from '~/redux/reduce'

const compose = m__windows.redux_devtools_extension_compose || p__redux.compose
const enhancer = compose()

const create_store= (state: {}): p__redux.Store => {
	const store = p__redux.createStore(d__reduce, state, enhancer)
	const serialize = m__local_storage.store_serializer(store)
	m__windows.onbeforeunload_subscribe(serialize)
	const throttle = m__local_storage.store_throttler(store)
	store.subscribe(throttle)
	if (module.hot) {
		module.hot.accept('~/redux/reduce', () => {
			store.replaceReducer(d__reduce)
		})
	}
	return store
}

export default create_store
