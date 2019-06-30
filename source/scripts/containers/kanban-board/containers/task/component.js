
import * as p__immutable from 'immutable'

import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

export default class extends i__react.PureComponent {
	static displayName = 'task'
	static propTypes = {
		props: i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		}).isRequired,
		state: i__prop_types.shape({
			name: i__prop_types.string.isRequired,
			text: i__prop_types.string.isRequired,
			columns: i__prop_types.objectOf(
				p__immutable.List,
			).isRequired,
		}).isRequired,
		dispatch: i__prop_types.shape({
			remove: i__prop_types.func.isRequired,
			locate: i__prop_types.func.isRequired,
			update: i__prop_types.func.isRequired,
		}).isRequired,
	}
	state = {
		moving: false,
	}
	constructor(object) {
		super(object)
		this.self.references.move = i__react.createRef()
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
			const object = this.props
			object.dispatch.update({
				name: value,
			})
		},
		handle_change_text: ({
			target: {
				value,
			},
		}) => {
			const object = this.props
			object.dispatch.update({
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
			const object = this.props
			return [
				$('li' + style('task--action--locate'), {
					key: id,
				}, [
					$('div' + style('task--action--locate--arrow'), [
						'→ ',
					]),
					$('div' + style('task--action--locate--title'), {
						onClick: () => {
							object.dispatch.locate({
								column_id: id,
							})
						},
					}, [
						$('span' + style('task--action--locate--text'), [
							name,
						]),
					]),
				]),
			][0]
		},
	}
	render() {
		const object = this.props
		return [
			$('div' + style('task'), [
				$('div' + style('task--name'), [
					$('input' + style('task--input--name'), {
						onChange: this.self.handle_change_name,
						placeholder: 'task name',
						value: object.state.name,
					}),
				]),
				$('div' + style('task--text'), [
					$('input' + style('task--input--text'), {
						onChange: this.self.handle_change_text,
						placeholder: 'task text',
						value: object.state.text,
					}),
				]),
				$('div' + style('task--options'), [
					$('div' + style('task--action--remove'), [
						$('span' + style('task--action--remove--text'), {
							onClick: object.dispatch.remove,
						}, [
							'remove',
						]),
					]),
					$('div' + style('task--dropdown'), {
						ref: this.self.references.move,
					}, [
						$('div' + style('task--action--move'), [
							$('span' + style('task--action--move--text'), [
								this.state.moving ? $([
									$('span' + style('task--action--move--arrow'), [
										'↓',
									]), ' ',
								]) : '↓ ',
								$('span' + style('task--action--move--title'), {
									onClick: this.self.move,
								}, [
									'move',
								]),
							]),
						]),
						this.state.moving && $('ul' + style('task--list'), [
							object.state.columns.map(this.self.render_column),
						]),
					]),
				]),
			]),
		][0]
	}
}
