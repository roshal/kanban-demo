
import * as ps__lodash from 'lodash'

import * as ms__tokens from '~/redux/tokens'
import * as ms__windows from '~/commons/windows'


const storage = ms__windows.local_storage

export const deserialize = () => {
	try {
		const string = storage.getItem(ms__tokens.token)
		if (string === null) {
			return undefined
		}
		return JSON.parse(string)
	} catch (error) {
		console.warn(error)
		return undefined
	}
}

export const store_serializer = (store) => {
	return () => {
		const state = store.getState()
		try {
			const string = JSON.stringify(state)
			storage.setItem(ms__tokens.token, string)
		} catch (error) {
			console.warn(error)
		}
	}
}

export const store_throttler = (store, milliseconds = 1 << 12) => {
	return ps__lodash.throttle(store_serializer(store), milliseconds, {
		leading: false,
	})
}
