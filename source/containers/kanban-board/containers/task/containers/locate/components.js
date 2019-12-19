
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)


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
