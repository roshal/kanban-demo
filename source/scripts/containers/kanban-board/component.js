
import p__prop_types from 'prop-types'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'

import m__containers__column from './containers/column'

const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'kanban-board'
	static propTypes = {
		columns: p__prop_types.objectOf(
			ps__immutable.List,
		).isRequired,
	}
	renders = {
		column: (object) => {
			return [
				$(m__containers__column, {
					key: object.id,
					id: object.id,
				}),
			][0]
		},
	}
	render = () => {
		return [
			$('div.kanban-board', [
				$('div.kanban-board--wrapper', [
					this.props.columns.map(this.renders.column),
				]),
			]),
		][0]
	}
}
