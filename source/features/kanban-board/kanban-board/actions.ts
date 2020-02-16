
import * as p__redux from 'redux'


import * as m__actions from '~/redux/actions'

import * as m__types from './types'


export const produce = (
	props: m__types.props__container,
): p__redux.ActionCreatorsMapObject => ({
	reset: () => {
		return m__actions.reset()
	},
})
