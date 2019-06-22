
const p__immutable = require('immutable')
const p__prop_types = require('prop-types')
const p__react = require('react')
const p__react_hyperscript = require('react-hyperscript')

const m__container__column = require('./containers/column')

const $ = p__react_hyperscript

module.exports = class extends p__react.PureComponent {
	static displayName = 'kanban-board'
	static propTypes = {
		columns: p__prop_types.objectOf(
			p__immutable.List,
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
				$('div.kanban-board--action--reset', [
					$('span.kanban-board--action--reset--text', {
						onClick: this.props.actions.reset,
					}, [
						'reset',
					]),
				]),
			]),
		][0]
	}
}
