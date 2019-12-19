
import i__react_hyperscript from 'react-hyperscript'

import d__container__task from '../../containers/task'


const $ = i__react_hyperscript


export const task = ({
	props,
}) => {
	return [
		$(d__container__task, {
			key: props.id,
			id: props.id,
		}),
	][0]
}
