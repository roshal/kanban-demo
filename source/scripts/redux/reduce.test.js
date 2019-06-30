
import * as m__actions from './actions'
import * as m__token from './token'

import d__reduce from './reduce'
import d__state from './state'


const name = m__token.array.join('--')

test(name, () => {
	const value = d__reduce(d__state, {})
	const check = d__state
	expect(value).toEqual(check)
})

test(name + ' reset', () => {
	const action = m__actions.reset()
	const value = d__reduce(d__state, action)
	const check = d__state
	expect(value).toEqual(check)
})
