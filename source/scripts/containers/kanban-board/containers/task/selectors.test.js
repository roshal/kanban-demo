
import * as p__immutable from 'immutable'

import * as m__selectors from './selectors'

import d__state from '~/redux/state'


test('select', () => {
	const select = m__selectors.selector()
	let value
	value = select(d__state, {
		id: 0,
	})
	value = p__immutable.fromJS(value).toJS()
	const equal = {
		name: 'qwe',
		text: 'qaz',
		columns: [
			{
				id: 1,
				name: 'in process',
			},
			{
				id: 2,
				name: 'done',
			},
		],
	}
	expect(value).toEqual(equal)
})
