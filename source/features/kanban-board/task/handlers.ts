
import * as m__types from './types'


export const produce = ({
	props,
}: {
	props: m__types.props__component,
}) => ({
	change_name: ({
		target: {
			value,
		},
	}) => {
		props.dispatch.update({
			name: value,
		})
	},
	change_text: ({
		target: {
			value,
		},
	}) => {
		props.dispatch.update({
			text: value,
		})
	},
})
