
import * as ms__tokens from './tokens'


const prefix = (name) => {
	return [ms__tokens.token, name].join('--')
}

export default {
	sort: prefix('sort'),
	update: prefix('update'),
}
