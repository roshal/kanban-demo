
import * as m__helpers from './helpers'


export const handle_object = (object) => {
	object = {
		...object,
	}
	const keys = Object.keys(object)
	for (const key of keys) {
		object[key] = m__helpers.id(object[key])
	}
	return object
}

export const id = (() => {
	let value = 0
	const map = new Map()
	return (key) => {
		if (!map.has(key)) {
			value += 1
			map.set(key, value)
		}
		return map.get(key)
	}
})()

export const styler = (styles) => {
	return (...keys) => {
		return keys.reduce((accumulator, value) => {
			value = styles[value]
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}
