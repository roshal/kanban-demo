
import * as p__immutable from 'immutable'

import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import d__container__column from './containers/column'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

export default class extends i__react.Component {
	static displayName = 'kanban-board'
	static propTypes = {
		state: i__prop_types.shape({
			columns: i__prop_types.instanceOf(p__immutable.List).isRequired,
		}).isRequired,
		dispatch: i__prop_types.shape({
			reset: i__prop_types.func.isRequired,
		}).isRequired,
	}
	self = {
		render_column: (object) => {
			return [
				$(d__container__column, {
					key: object.id,
					id: object.id,
				}),
			][0]
		},
	}
	render() {
		const object = this.props
		return [
			$('div' + style('kanban-board'), [
				$('div' + style('kanban-board--wrapper'), [
					object.state.columns.map(this.self.render_column),
				]),
				$('div' + style('kanban-board--action--reset'), [
					$('span' + style('kanban-board--action--reset--text'), {
						onClick: object.dispatch.reset,
					}, [
						'reset',
					]),
				]),
			]),
		][0]
	}
}
