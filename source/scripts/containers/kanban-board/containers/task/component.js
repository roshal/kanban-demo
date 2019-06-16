
import p__classnames from 'classnames'
import p__prop_types from 'prop-types'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'


const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'task'
	static propTypes = {
		name: p__prop_types.string.isRequired,
		text: p__prop_types.string.isRequired,
		columns: p__prop_types.objectOf(
			ps__immutable.List,
		).isRequired,
		actions: p__prop_types.shape({
			remove: p__prop_types.func.isRequired,
			locate: p__prop_types.func.isRequired,
			update: p__prop_types.func.isRequired,
		}).isRequired,
	}
	state = {
		moving: false,
	}
	constructor(props) {
		super(props)
		this.self.references.move = p__react.createRef()
	}
	componentDidMount() {
		document.addEventListener('click', this.self.click)
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.self.click)
	}
	self = {
		references: {},
		handle_change_name: ({
			target: {
				value,
			},
		}) => {
			this.props.actions.update({
				name: value,
			})
		},
		handle_change_text: ({
			target: {
				value,
			},
		}) => {
			this.props.actions.update({
				text: value,
			})
		},
		click: (event) => {
			const target = this.self.references.move.current
			if (target && target.contains(event.target)) {
				return
			}
			this.setState({
				moving: false,
			})
		},
		move: () => {
			this.setState({
				moving: !this.state.moving,
			})
		},
		render_column: ({
			id,
			name,
		}) => {
			return [
				$('li.task--action--locate', {
					key: id,
					onClick: () => {
						this.props.actions.locate({
							column_id: id,
						})
					},
				}, [
					$('div.task--action--locate--arrow', [
						'→ ',
					]),
					$('div.task--action--locate--title', [
						$('span.task--action--locate--text', [
							name,
						]),
					]),
				]),
			][0]
		},
	}
	render() {
		return [
			$('div.task', [
				$('div.task--name', [
					$('input.task--input--name', {
						onChange: this.self.handle_change_name,
						placeholder: 'название задачи',
						value: this.props.name,
					}),
				]),
				$('div.task--text', [
					$('input.task--input--text', {
						onChange: this.self.handle_change_text,
						placeholder: 'описание задачи',
						value: this.props.text,
					}),
				]),
				$('div.task--options', [
					$('div.task--action--remove', [
						$('span.task--action--remove--text', {
							onClick: this.props.actions.remove,
						}, [
							'удалить',
						]),
					]),
					$('div.task--action--move', {
						ref: this.self.references.move,
					}, [
						$('span.task--action--move--text', {
							onClick: this.self.move,
						}, [
							this.state.moving ? $([
								$('span.task--action--move--arrow', [
									'↓',
								]), ' ',
							]) : '↓ ',
							$('span.task--action--move--title', [
								'переместить',
							]),
						]),
						this.state.moving && $('ul.task--list', [
							this.props.columns.map(this.self.render_column),
						]),
					]),
				]),
			]),
		][0]
	}
}
