
import * as p__json5 from 'json5'
import * as p__lodash from 'lodash'
import * as p__redux from 'redux'


import * as m__token from '~/redux/token'
import * as m__windows from '~/commons/windows'


const storage = m__windows.local_storage

export const deserialize = () => {
	try {
		const string = storage.getItem(m__token.value)
		if (string === null) {
			return undefined
		}
		return p__json5.parse(string)
	} catch (error) {
		console.warn(error)
	}
}

export const store_serializer = (store: p__redux.Store) => {
	return () => {
		const state = store.getState()
		try {
			const string = p__json5.stringify(state)
			storage.setItem(m__token.value, string)
		} catch (error) {
			console.warn(error)
		}
	}
}

export const store_throttler = (store: p__redux.Store, milliseconds = 1 << 12) => {
	return p__lodash.throttle(store_serializer(store), milliseconds, {
		leading: false,
	})
}
