
import * as m__helpers from './helpers'
import * as m__types from './types'

export const handle_object = (object: m__types.table): m__types.table => {
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
	return (key: any) => {
		if (!map.has(key)) {
			value += 1
			map.set(key, value)
		}
		return map.get(key)
	}
})()

export const styler = (object: {
	[key: string]: string,
}) => {
	return (...keys: string[]) => {
		return keys.reduce((accumulator, value) => {
			if (value in object) {
				value = object[value]
			} else {
				console.info('- wrong class', value)
			}
			return value ? [accumulator, value].join('.') : accumulator
		}, '')
	}
}
