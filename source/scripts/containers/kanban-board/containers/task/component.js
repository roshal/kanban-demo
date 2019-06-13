
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
			delete: p__prop_types.func.isRequired,
			locate: p__prop_types.func.isRequired,
			update: p__prop_types.func.isRequired,
		}).isRequired,
	}
	constructor(props) {
		super(props)
		this.reference = p__react.createRef()
	}
	componentDidMount = () => {
		document.addEventListener('click', this.custom.click)
	}
	componentWillUnmount = () => {
		document.removeEventListener('click', this.custom.click)
	}
	state = {
		moving: false,
	}
	custom = {
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
			const target = this.reference.current
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
				$('li', {
					key: id,
					onClick: () => {
						this.props.actions.locate({
							column_id: id,
						})
					},
				}, [
					$('span.active--locate', [
						name,
					]),
				]),
			][0]
		},
	}
	render = () => {
		return [
			$('div.task', [
				$('div.task--name', [
					$('input.input', {
						onChange: this.custom.handle_change_name,
						placeholder: 'название задачи',
						value: this.props.name,
					}),
				]),
				$('div.task--text', [
					$('input.input', {
						onChange: this.custom.handle_change_text,
						placeholder: 'описание задачи',
						value: this.props.text,
					}),
				]),
				$('div.task--options', [
					$('div.task--delete', [
						$('span.active--delete', {
							onClick: this.props.actions.delete,
						}, [
							'удалить',
						]),
					]),
					$('div.task--move', {
						ref: this.reference,
					}, [
						$('span', {
							className: this.state.moving ? 'active--move--active' : 'active--move',
							onClick: this.custom.move,
						}, [
							'↓ переместить',
						]),
						$('ul.task--list', {
							...this.state.moving ? {} : {
								style: {
									'display': 'none',
								},
							},
						}, [
							this.props.columns.map(this.custom.render_column),
						]),
					]),
				]),
			]),
		][0]
	}
}
