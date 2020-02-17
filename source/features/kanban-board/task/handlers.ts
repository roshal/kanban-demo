
import * as m__types from './types'

export const produce = ({
	props,
}: {
	props: m__types.props__component,
}) => ({
	change_name: ({
		target,
	}) => {
		props.dispatch.update({
			name: target.value,
		})
	},
	change_text: ({
		target,
	}) => {
		props.dispatch.update({
			text: target.value,
		})
	},
})
