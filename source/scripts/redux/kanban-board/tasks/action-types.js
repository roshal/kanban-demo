
import * as ms__keys from './keys'


const prefix = (name) => {
	return [ms__keys.key, name].join('--')
}

export default {
	create: prefix('create'),
	delete: prefix('delete'),
	locate: prefix('locate'),
	update: prefix('update'),
}
