
import i__react_hyperscript from 'react-hyperscript'


import * as m__helpers from '~/commons/helpers'

import * as m__types from './types'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)


export const column = (
	props: m__types.props__column,
) => {
	return [
		$('li' + style('task--action--locate'), {
			key: props.object.id,
		}, [
			$('div' + style('task--action--locate--arrow'), [
				'→ ',
			]),
			$('div' + style('task--action--locate--title'), {
				onClick: () => {
					props.callbacks.close()
					props.dispatch.locate({
						column_id: props.object.id,
					})
				},
			}, [
				$('span' + style('task--action--locate--text'), [
					props.object.name,
				]),
			]),
		]),
	][0]
}


column.displayName = 'column'
