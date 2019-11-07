
import * as p__immutable from 'immutable'
import * as p__react_debounce_input from 'react-debounce-input'

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

export default class extends i__react.Component {

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
			tasks: i__prop_types.instanceOf(p__immutable.List).isRequired,
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
			this.props.dispatch.rename({
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
		return [
			$('div' + style('column'), [
				$('div', {
					className: classnames({
						'column--head': !this.props.state.tasks.isEmpty(),
						'column--head--empty': this.props.state.tasks.isEmpty(),
					}),
				}, [
					$('div' + style('column--title'), [
						$(p__react_debounce_input, {
							className: s__styles['column--input--name'],
							debounceTimeout: 250,
							onChange: this.self.handle_change_name,
							placeholder: 'column name',
							value: this.props.state.name,
						}),
					]),
					$('div' + style('column--options'), [
						$('div' + style('column--action--add'), [
							$('span' + style('column--action--add--text'), {
								onClick: this.props.dispatch.add,
							}, [
								'add task',
							]),
						]),
						$('div' + style('column--action--sort'), [
							$('span' + style('column--action--sort--arrow'), [
								!!this.props.state.sorting && (
									this.props.state.sorting < 0 ? '↑' : '↓'
								), ' ',
							]),
							$('span' + style('column--action--sort--title'), {
								onClick: this.props.dispatch.sort,
							}, [
								'sort',
							]),
						]),
					]),
				]),
				this.props.state.tasks.isEmpty() || $('div' + style('column--body'), [
					this.props.state.tasks.map(this.self.render_task),
				]),
			]),
		][0]
	}

}
