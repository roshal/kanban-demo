
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

test(name + ' create', () => {
	const object = {
		column_id: 0,
	}
	const action = m__actions.create(object)
	const value = d__reduce(d__state, action).length
	const check = d__state.length + 1
	expect(value).toEqual(check)
})

test(name + ' remove', () => {
	const object = {
		id: 0,
	}
	const action = m__actions.remove(object)
	const value = d__reduce(d__state, action).length
	const check = d__state.length - 1
	expect(value).toEqual(check)
})

test(name + ' locate', () => {
	const object = {
		id: 0,
		column_id: 1,
	}
	const action = m__actions.locate(object)
	const value = d__reduce(d__state, action).find((task) => {
		return object.id === task.id
	})
	const check = object
	expect(value).toMatchObject(check)
})

test(name + ' update', () => {
	const object = {
		id: 0,
		name: 'name',
		text: 'text',
	}
	const action = m__actions.update(object)
	const value = d__reduce(d__state, action).find((task) => {
		return object.id === task.id
	})
	const check = object
	expect(value).toMatchObject(check)
})
