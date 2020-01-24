
import * as m__actions from '~/redux/actions'

import * as m__types from './types'


export const produce = ({
	props,
}: {
	props: m__types.props__component,
}) => ({
	reset: () => {
		return m__actions.reset()
	},
})
