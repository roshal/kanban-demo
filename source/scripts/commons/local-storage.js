
const p__lodash = require('lodash/throttle')

const m__token = require('~/redux/token')
const m__windows = require('~/commons/windows')

const storage = m__windows.local_storage

exports.deserialize = () => {
	try {
		const string = storage.getItem(m__token.value)
		if (string === null) {
			return undefined
		}
		return JSON.parse(string)
	} catch (error) {
		console.warn(error)
	}
}

exports.store_serializer = (store) => {
	return () => {
		const state = store.getState()
		try {
			const string = JSON.stringify(state)
			storage.setItem(m__token.value, string)
		} catch (error) {
			console.warn(error)
		}
	}
}

exports.store_throttler = (store, milliseconds = 1 << 12) => {
	return p__lodash(exports.store_serializer(store), milliseconds, {
		leading: false,
	})
}
