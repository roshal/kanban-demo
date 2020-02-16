
import * as m__actions from './actions'
import * as m__token from './token'

import d__reduce from './reduce'
import d__state from './state'


const name = m__token.array.join('--')

test(name, () => {
	const value = d__reduce(d__state, {
		type: '',
	})
	const check = d__state
	expect(value).toEqual(check)
})

test(name + ' sort', () => {
	const object = {
		id: 0,
	}
	const action = m__actions.sort(object)
	const value = d__reduce(d__state, action).find((column) => {
		return object.id === column.id
	}).sorting
	const check = 1
	expect(value).toEqual(check)
})

test(name + ' update', () => {
	const object = {
		id: 0,
		name: 'name',
	}
	const action = m__actions.update(object)
	const value = d__reduce(d__state, action).find((column) => {
		return object.id === column.id
	}).name
	const check = object.name
	expect(value).toEqual(check)
})
