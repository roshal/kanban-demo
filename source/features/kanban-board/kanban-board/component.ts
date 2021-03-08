
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '-/commons/helpers'

import * as m__components from './components'
import * as m__types from './types'
import s__styles from './styles.pcss'

const style = m__helpers.styler(s__styles)

const component = (
	props: m__types.props__component,
): p__react.ReactElement => {
	return [
		$('div' + style('kanban-board'), [
			$('div' + style('kanban-board--body'), [
				props.state.columns.map((object) => {
					return m__components.column({
						object,
					})
				}),
			]),
			$('div' + style('kanban-board--head'), [
				$('div' + style('kanban-board--action--reset'), [
					$('span' + style('kanban-board--action--reset--text'), {
						onClick: props.dispatch.reset,
					}, [
						'reset',
					]),
				]),
			]),
		]),
	][0]
}

component.displayName = 'kanban-board'

export default component
