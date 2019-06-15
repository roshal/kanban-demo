
import p__prop_types from 'prop-types'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'

import m__container__column from './containers/column'


const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'kanban-board'
	static propTypes = {
		columns: p__prop_types.objectOf(
			ps__immutable.List,
		).isRequired,
		actions: p__prop_types.shape({
			reset: p__prop_types.func.isRequired,
		}).isRequired,
	}
	self = {
		render_column: (object) => {
			return [
				$(m__container__column, {
					key: object.id,
					id: object.id,
				}),
			][0]
		},
	}
	render() {
		return [
			$('div.kanban-board', [
				$('div.kanban-board--wrapper', [
					this.props.columns.map(this.self.render_column),
				]),
				$('div.kanban-board--reset', [
					$('span.active--reset', {
						onClick: this.props.actions.reset,
					}, [
						'сбросить',
					]),
				]),
			]),
		][0]
	}
}
