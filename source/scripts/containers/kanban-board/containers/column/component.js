
import p__classnames from 'classnames'
import p__prop_types from 'prop-types'
import p__react from 'react'
import p__react_hyperscript from 'react-hyperscript'

import * as ps__immutable from 'immutable'

import m__container__task from '../../containers/task'


const $ = p__react_hyperscript

export default class extends p__react.PureComponent {
	static displayName = 'column'
	static propTypes = {
		id: p__prop_types.number.isRequired,
		name: p__prop_types.string.isRequired,
		sorting: p__prop_types.oneOf([
			-1, 0, 1,
		]).isRequired,
		tasks: p__prop_types.objectOf(
			ps__immutable.List,
		).isRequired,
		actions: p__prop_types.shape({
			add: p__prop_types.func.isRequired,
			rename: p__prop_types.func.isRequired,
			sort: p__prop_types.func.isRequired,
		}).isRequired,
	}
	self = {
		handle_change_name: ({
			target: {
				value,
			},
		}) => {
			this.props.actions.rename({
				name: value,
			})
		},
		render_task: ({
			id,
		}) => {
			return [
				$(m__container__task, {
					key: id,
					id,
				}),
			][0]
		},
	}
	render() {
		return [
			$('div.column', [
				$('div', {
					className: p__classnames({
						'column--head': !this.props.tasks.isEmpty(),
						'column--head--empty': this.props.tasks.isEmpty(),
					}),
				}, [
					$('div.column--title', [
						$('input.column--input--name', {
							onChange: this.self.handle_change_name,
							placeholder: 'column name',
							value: this.props.name,
						}),
					]),
					$('div.column--options', [
						$('div.column--action--add', [
							$('span.column--action--add--text', {
								onClick: this.props.actions.add,
							}, [
								'add task',
							]),
						]),
						$('div.column--action--sort', [
							$('span.column--action--sort--arrow', [
								!!this.props.sorting && (this.props.sorting < 0 ? '↑' : '↓'), ' ',
							]),
							$('span.column--action--sort--title', {
								onClick: this.props.actions.sort,
							}, [
								'sort',
							]),
						]),
					]),
				]),
				this.props.tasks.isEmpty() || $('div.column--body', [
					this.props.tasks.map(this.self.render_task),
				]),
			]),
		][0]
	}
}
