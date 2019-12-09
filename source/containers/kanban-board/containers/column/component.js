
import * as p__react_debounce_input from 'react-debounce-input'

import i__classnames from 'classnames/bind'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import * as m__components from './components'
import * as m__handlers from './handlers'
import * as m__types from './types'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const classnames = i__classnames.bind(s__styles)
const style = m__helpers.styler(s__styles)

const component = (props) => {
	const handlers = m__handlers.produce({
		props,
	})
	return [
		$('div' + style('column'), [
			$('div', {
				className: classnames({
					'column--head': props.state.tasks.length,
					'column--head--empty': !props.state.tasks.length,
				}),
			}, [
				$('div' + style('column--title'), [
					$(p__react_debounce_input, {
						className: s__styles['column--input--name'],
						debounceTimeout: 250,
						onChange: handlers.change_name,
						placeholder: 'column name',
						value: props.state.name,
					}),
				]),
				$('div' + style('column--options'), [
					$('div' + style('column--action--add'), [
						$('span' + style('column--action--add--text'), {
							onClick: props.dispatch.add,
						}, [
							'add task',
						]),
					]),
					$('div' + style('column--action--sort'), [
						$('span' + style('column--action--sort--arrow'), [
							!!props.state.sorting && (
								props.state.sorting < 0 ? '↑' : '↓'
							), ' ',
						]),
						$('span' + style('column--action--sort--title'), {
							onClick: props.dispatch.sort,
						}, [
							'sort',
						]),
					]),
				]),
			]),
			props.state.tasks.length ? $('div' + style('column--body'), [
				props.state.tasks.map((props) => {
					return m__components.task({
						props,
					})
				}),
			]) : null,
		]),
	][0]
}

component.displayName = 'column'
component.propTypes = m__types.component_props


export default component
