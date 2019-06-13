
import * as ms__constants from '../constants'

const prefix = (name) => {
	return [ms__constants.name, 'columns', name].join('--')
}

export default {
	sort: prefix('sort'),
	update: prefix('update'),
}
