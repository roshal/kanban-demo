
import * as p__immutable from 'immutable'

import * as m__selectors from './selectors'

import d__state from '~/redux/state'


test(m__selectors.selector.name, () => {
	const select = m__selectors.selector()
	const value = select(d__state, {
		id: 0,
	})
	const received = p__immutable.fromJS(value).toJS()
	const expected = {
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
	expect(received).toEqual(expected)
})
