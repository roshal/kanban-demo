
import * as p__immutable from 'immutable'

import * as m__selectors from './selectors'

import d__state from '~/redux/state'


test('select', () => {
	const select = m__selectors.selector()
	let value
	value = select(d__state)
	value = p__immutable.fromJS(value).toJS()
	const equal = {
		columns: [
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
