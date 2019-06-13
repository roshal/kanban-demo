
import * as ms__constants from '../constants'

const prefix = (name) => {
	return [ms__constants.name, 'tasks', name].join('--')
}

export default {
	create: prefix('create'),
	delete: prefix('delete'),
	locate: prefix('locate'),
	update: prefix('update'),
}
