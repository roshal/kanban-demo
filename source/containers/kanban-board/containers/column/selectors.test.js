
import * as p__immutable from 'immutable'

import * as m__selectors from './selectors'

import d__state from '~/redux/state'


test(m__selectors.selector.name, () => {
	const select = m__selectors.selector()
	const received = select(d__state, {
		id: 0,
	})
	const expected = {
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
	expect(received).toEqual(expected)
})
