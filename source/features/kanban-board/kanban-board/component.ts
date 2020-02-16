
import * as p__react from 'react'

import i__react_hyperscript from 'react-hyperscript'


import * as m__helpers from '~/commons/helpers'

import * as m__components from './components'
import * as m__types from './types'


const s__styles = require('./styles.sss')

const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

const component = (
	props: m__types.props__component,
): p__react.ReactElement => {
	return [
		$('div' + style('kanban-board'), [
			$('div' + style('kanban-board--wrapper'), [
				props.state.columns.map((object) => {
					return m__components.column({
						object,
					})
				}),
			]),
			$('div' + style('kanban-board--action--reset'), [
				$('span' + style('kanban-board--action--reset--text'), {
					onClick: props.dispatch.reset,
				}, [
					'reset',
				]),
			]),
		]),
	][0]
}

component.displayName = 'kanban-board'


export default component
