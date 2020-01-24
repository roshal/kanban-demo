
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
	}: {
		target: {
			value: string,
		},
	}) => {
		props.dispatch.rename({
			name: value,
		})
	},
})
