
export const produce = ({
	callbacks,
	props,
	references,
}) => {
	const handle_click = (event) => {
		const current = references.popup.current
		const statement = current && current.contains(event.target)
		if (statement) {
			return
		}
		callbacks.close()
		document.removeEventListener('click', handle_click)
	}
	return {
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
		open: () => {
			callbacks.open()
			document.addEventListener('click', handle_click)
		},
		close: () => {
			callbacks.close()
			document.removeEventListener('click', handle_click)
		},
	}
}
