
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '-/commons/helpers'
//	import d__debounce_input from '-/components/debounce-input'

import * as m__components from './components'
import * as m__handlers from './handlers'
import * as m__types from './types'
import s__styles from './styles.pcss'

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
		$('div' + style('column-wrapper'), [
			$('div' + style('column--row', 'column--head'), [
				$('div' + style('column--title'), [
					$('input', {
						className: s__styles['column--input--name'],
						//	debounceTimeout: 250,
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
			props.state.tasks.length ? $('div' + style('column--row', 'column--body'), [
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
