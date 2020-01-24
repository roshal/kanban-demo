
export const produce = ({
	state, set_state,
	references,
	handlers,
}) => ({
	open: () => {
		if (state.popup) {
			return
		}
		document.addEventListener('click', handlers.click)
		set_state({
			popup: true,
		})
	},
	close: () => {
		if (!state.popup) {
			return
		}
		document.removeEventListener('click', handlers.click)
		set_state({
			popup: false,
		})
	},
	click: (event) => {
		const current = references.popup.current
		const statement = current && current.contains(event.target)
		if (statement) {
			return
		}
		handlers.close()
	},
})
