
import * as p__react from 'react'
import i__classnames from 'classnames/bind'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'
import d__debounce_input from '~/components/debounce-input'

import * as m__components from './components'
import * as m__handlers from './handlers'
import * as m__types from './types'

const s__styles = require('./styles.sss')

const $ = i__react_hyperscript
const classnames = i__classnames.bind(s__styles)
const style = m__helpers.styler(s__styles)

const component = (
	props: m__types.props__component,
): p__react.ReactElement => {
	const handlers = p__react.useMemo(() => {
		return m__handlers.produce({
			props,
		})
	}, [])
	return [
		$('div' + style('column'), [
			$('div', {
				className: classnames({
					'column--head': props.state.tasks.length,
					'column--head--empty': !props.state.tasks.length,
				}),
			}, [
				$('div' + style('column--title'), [
					$(d__debounce_input, {
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
				props.state.tasks.map((object) => {
					return m__components.task({
						object,
					})
				}),
			]) : null,
		]),
	][0]
}

component.displayName = 'column'

export default component
