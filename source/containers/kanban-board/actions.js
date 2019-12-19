
import * as m__actions from '~/redux/actions'

export const produce = ({
	props,
}) => ({
	reset: () => {
		return m__actions.reset()
	},
})
