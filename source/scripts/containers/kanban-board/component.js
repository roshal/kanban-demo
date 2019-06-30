
import * as p__immutable from 'immutable'

import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import d__container__column from './containers/column'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

export default class extends i__react.PureComponent {
	static displayName = 'kanban-board'
	static propTypes = {
		values: i__prop_types.shape({
			columns: i__prop_types.objectOf(
				p__immutable.List,
			).isRequired,
		}).isRequired,
		actions: i__prop_types.shape({
			reset: i__prop_types.func.isRequired,
		}).isRequired,
	}
	self = {
		render_column: (object) => {
			return [
				$(d__container__column, {
					key: object.id,
					props: {
						id: object.id,
					},
				}),
			][0]
		},
	}
	render() {
		const object = m__helpers.cast_props(this.props)
		return [
			$('div' + style('kanban-board'), [
				$('div' + style('kanban-board--wrapper'), [
					object.values.columns.map(this.self.render_column),
				]),
				$('div' + style('kanban-board--action--reset'), [
					$('span' + style('kanban-board--action--reset--text'), {
						onClick: object.actions.reset,
					}, [
						'reset',
					]),
				]),
			]),
		][0]
	}
}
