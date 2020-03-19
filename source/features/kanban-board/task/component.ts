
import * as p__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'
import d__debounce_input from '~/components/debounce-input'

import * as m__callbacks from './callbacks'
import * as m__handlers from './handlers'
import * as m__types from './types'
import d__container__locate from '../locate/container'

const s__styles = require('./styles.sss')

const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

const component = (
	props: m__types.props__component,
): p__react.ReactElement => {
	const [state, set_state] = p__react.useState({
		popup: false,
	})
	const references = {
		popup: p__react.createRef(),
	}
	const callbacks = p__react.useMemo(() => {
		return m__callbacks.produce({
			set_state,
		})
	}, [])
	const handlers = p__react.useMemo(() => {
		return m__handlers.produce({
			callbacks,
			props,
			references,
		})
	}, [])
	return [
		$('div' + style('task'), [
			$('div' + style('task--name'), [
				$(d__debounce_input, {
					className: s__styles['task--input--name'],
					debounceTimeout: 250,
					onChange: handlers.change_name,
					placeholder: 'task name',
					value: props.state.name,
				}),
			]),
			$('div' + style('task--text'), [
				$(d__debounce_input, {
					className: s__styles['task--input--text'],
					debounceTimeout: 250,
					onChange: handlers.change_text,
					placeholder: 'task text',
					value: props.state.text,
				}, []),
			]),
			$('div' + style('task--options'), [
				$('div' + style('task--action--remove'), [
					$('span' + style('task--action--remove--text'), {
						onClick: props.dispatch.remove,
					}, [
						'remove',
					]),
				]),
				$('div' + style('task--dropdown'), {
					ref: references.popup,
				}, [
					$('div' + style('task--action--move'), [
						$('span' + style('task--action--move--text'), [
							...state.popup ? [
								$('span' + style('task--action--move--arrow'), [
									'↓',
								]), ' ',
							] : ['↓ '],
							$('span' + style('task--action--move--title'), {
								onClick: state.popup ? handlers.close : handlers.open,
							}, [
								'move',
							]),
						]),
					]),
					state.popup && $(d__container__locate, {
						object: {
							id: props.object.id,
						},
						callbacks: {
							close: callbacks.close,
						},
					}),
				]),
			]),
		]),
	][0]
}

component.displayName = 'task'

export default component
