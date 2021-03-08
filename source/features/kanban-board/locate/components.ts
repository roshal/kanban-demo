
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '-/commons/helpers'

import * as m__types from './types'
import s__styles from './styles.pcss'

const style = m__helpers.styler(s__styles)

export const column = (
	props: m__types.props__component__column,
): p__react.ReactElement => {
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
