
import * as ps__redux from 'redux'

import m__reducer from '~/redux/reducer'

import * as ms__local_storage from '~/commons/local-storage'
import * as ms__windows from '~/commons/windows'


const compose = ms__windows.redux_devtools_extension_compose || ps__redux.compose
const enhancer = compose()

export default (state) => {
	const store = ps__redux.createStore(m__reducer, state, enhancer)
	const serialize = ms__local_storage.store_serializer(store)
	ms__windows.onbeforeunload_subscribe(serialize)
	const throttle = ms__local_storage.store_throttler(store)
	store.subscribe(throttle)
	if (module.hot) {
		module.hot.accept('~/redux/reducer', () => {
			store.replaceReducer(m__reducer)
		})
	}
	return store
}
