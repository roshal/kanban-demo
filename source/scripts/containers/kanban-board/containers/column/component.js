
import * as p__immutable from 'immutable'

import i__classnames from 'classnames/bind'
import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import d__container__task from '../../containers/task'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const classnames = i__classnames.bind(s__styles)
const style = m__helpers.styler(s__styles)

export default class extends i__react.PureComponent {
	static displayName = 'column'
	static propTypes = {
		props: i__prop_types.shape({
			id: i__prop_types.number.isRequired,
		}).isRequired,
		state: i__prop_types.shape({
			name: i__prop_types.string.isRequired,
			sorting: i__prop_types.oneOf([
				-1, 0, 1,
			]).isRequired,
			tasks: i__prop_types.objectOf(
				p__immutable.List,
			).isRequired,
		}).isRequired,
		dispatch: i__prop_types.shape({
			add: i__prop_types.func.isRequired,
			rename: i__prop_types.func.isRequired,
			sort: i__prop_types.func.isRequired,
		}).isRequired,
	}
	self = {
		handle_change_name: ({
			target: {
				value,
			},
		}) => {
			const object = this.props
			object.dispatch.rename({
				name: value,
			})
		},
		render_task: (object) => {
			return [
				$(d__container__task, {
					key: object.id,
					id: object.id,
				}),
			][0]
		},
	}
	render() {
		const object = this.props
		return [
			$('div' + style('column'), [
				$('div', {
					className: classnames({
						'column--head': !object.state.tasks.isEmpty(),
						'column--head--empty': object.state.tasks.isEmpty(),
					}),
				}, [
					$('div' + style('column--title'), [
						$('input' + style('column--input--name'), {
							onChange: this.self.handle_change_name,
							placeholder: 'column name',
							value: object.state.name,
						}),
					]),
					$('div' + style('column--options'), [
						$('div' + style('column--action--add'), [
							$('span' + style('column--action--add--text'), {
								onClick: object.dispatch.add,
							}, [
								'add task',
							]),
						]),
						$('div' + style('column--action--sort'), [
							$('span' + style('column--action--sort--arrow'), [
								!!object.state.sorting && (
									object.state.sorting < 0 ? '↑' : '↓'
								), ' ',
							]),
							$('span' + style('column--action--sort--title'), {
								onClick: object.dispatch.sort,
							}, [
								'sort',
							]),
						]),
					]),
				]),
				object.state.tasks.isEmpty() || $('div' + style('column--body'), [
					object.state.tasks.map(this.self.render_task),
				]),
			]),
		][0]
	}
}
