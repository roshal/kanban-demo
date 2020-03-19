
export const produce = ({
	set_state,
}) => ({
	open: () => {
		set_state({
			popup: true,
		})
	},
	close: () => {
		set_state({
			popup: false,
		})
	},
})
