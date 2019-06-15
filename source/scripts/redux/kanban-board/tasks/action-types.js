
import * as ms__tokens from './tokens'


const prefix = (name) => {
	return [ms__tokens.token, name].join('--')
}

export default {
	create: prefix('create'),
	delete: prefix('delete'),
	locate: prefix('locate'),
	update: prefix('update'),
}
