
import * as p__immutable from 'immutable'

import * as m__selectors from './selectors'

import d__state from '~/redux/state'


test('select', () => {
	let value
	value = m__selectors.select(d__state, {
		id: 0,
	})
	value = p__immutable.fromJS(value).toJS()
	const equal = {
		name: 'to do',
		sorting: 0,
		tasks: [
			{
				id: 0,
			},
			{
				id: 1,
			},
			{
				id: 2,
			},
		],
	}
	expect(value).toEqual(equal)
})
