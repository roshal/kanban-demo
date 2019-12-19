
export const produce = ({
	props,
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
