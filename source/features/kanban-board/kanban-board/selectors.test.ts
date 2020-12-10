
import d__state from '-/redux/state'

import * as m__selectors from './selectors'

test(m__selectors.selector.name, () => {
	const select = m__selectors.selector()
	const received = select(d__state)
	const expected = {
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
	expect(received).toEqual(expected)
})
