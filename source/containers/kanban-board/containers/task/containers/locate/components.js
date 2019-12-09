
export const column = ({
	props,
	dispatch,
	callbacks,
}) => {
	return [
		$('li' + style('task--action--locate'), {
			key: props.id,
		}, [
			$('div' + style('task--action--locate--arrow'), [
				'→ ',
			]),
			$('div' + style('task--action--locate--title'), {
				onClick: () => {
					callbacks.close()
					dispatch.locate({
						column_id: props.id,
					})
				},
			}, [
				$('span' + style('task--action--locate--text'), [
					props.name,
				]),
			]),
		]),
	][0]
}
