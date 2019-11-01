
import * as p__immutable from 'immutable'

import i__prop_types from 'prop-types'
import i__react from 'react'
import i__react_hyperscript from 'react-hyperscript'

import * as m__helpers from '~/commons/helpers'

import s__styles from './styles.sss'


const $ = i__react_hyperscript
const style = m__helpers.styler(s__styles)

export default class extends i__react.Component {

	static displayName = 'column'
	static propTypes = {
		props: i__prop_types.shape({
			id: i__prop_types.number.isRequired,
			close: i__prop_types.func.isRequired,
		}).isRequired,
		state: i__prop_types.shape({
			columns: i__prop_types.instanceOf(p__immutable.List).isRequired,
		}).isRequired,
		dispatch: i__prop_types.shape({
			locate: i__prop_types.func.isRequired,
		}).isRequired,
	}

	self = {
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
							object.props.close()
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
			$('ul' + style('task--list'), [
				object.state.columns.map(this.self.render_column),
			]),
		][0]
	}

}
