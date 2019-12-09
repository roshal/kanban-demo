
export const produce = ({
	props,
}) => ({
	change_name: ({
		target: {
			value,
		},
	}) => {
		props.dispatch.rename({
			name: value,
		})
	},
})
