
import * as p__react_debounce_input from 'react-debounce-input'

import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import d__container__locate from './containers/locate'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

export default class extends i__react.Component {

	static displayName = 'task'
	static propTypes = {
		props: i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		}).isRequired,
		state: i__prop_types.shape({
			name: i__prop_types.string.isRequired,
			text: i__prop_types.string.isRequired,
		}).isRequired,
		dispatch: i__prop_types.shape({
			remove: i__prop_types.func.isRequired,
			update: i__prop_types.func.isRequired,
		}).isRequired,
	}

	state = {
		popup: false,
	}

	constructor(object) {
		super(object)
		this.self.references.popup = i__react.createRef()
	}

	self = {
		references: {},
		handle_change_name: ({
			target: {
				value,
			},
		}) => {
			this.props.dispatch.update({
				name: value,
			})
		},
		handle_change_text: ({
			target: {
				value,
			},
		}) => {
			this.props.dispatch.update({
				text: value,
			})
		},
		open: () => {
			if (this.state.popup) {
				return
			}
			document.addEventListener('click', this.self.click)
			this.setState({
				popup: true,
			})
		},
		close: (event) => {
			if (!this.state.popup) {
				return
			}
			document.removeEventListener('click', this.self.click)
			this.setState({
				popup: false,
			})
		},
		click: (event) => {
			const current = this.self.references.popup.current
			const statement = current && current.contains(event.target)
			if (statement) {
				return
			}
			this.self.close()
		},
	}

	render() {
		return [
			$('div' + style('task'), [
				$('div' + style('task--name'), [
					$(p__react_debounce_input, {
						className: s__styles['task--input--name'],
						debounceTimeout: 250,
						onChange: this.self.handle_change_name,
						placeholder: 'task name',
						value: this.props.state.name,
					}),
				]),
				$('div' + style('task--text'), [
					$(p__react_debounce_input, {
						className: s__styles['task--input--text'],
						debounceTimeout: 250,
						onChange: this.self.handle_change_text,
						placeholder: 'task text',
						value: this.props.state.text,
					}),
				]),
				$('div' + style('task--options'), [
					$('div' + style('task--action--remove'), [
						$('span' + style('task--action--remove--text'), {
							onClick: this.props.dispatch.remove,
						}, [
							'remove',
						]),
					]),
					$('div' + style('task--dropdown'), {
						ref: this.self.references.popup,
					}, [
						$('div' + style('task--action--move'), [
							$('span' + style('task--action--move--text'), [
								this.state.popup ? $([
									$('span' + style('task--action--move--arrow'), [
										'↓',
									]), ' ',
								]) : '↓ ',
								$('span' + style('task--action--move--title'), {
									onClick: this.state.popup ? this.self.close : this.self.open,
								}, [
									'move',
								]),
							]),
						]),
						this.state.popup && $(d__container__locate, {
							id: this.props.props.id,
							close: this.self.close,
						}),
					]),
				]),
			]),
		][0]
	}

}
