
import d__container__column from './containers/column'


export const column = ({
	props,
}) => {
	return [
		$(d__container__column, {
			key: props.id,
			id: props.id,
		}),
	][0]
}
