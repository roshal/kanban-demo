
import d__container__task from '../../containers/task'


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
