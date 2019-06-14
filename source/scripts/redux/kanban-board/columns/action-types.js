
import * as ms__keys from './keys'


const prefix = (name) => {
	return [ms__keys.key, name].join('--')
}

export default {
	sort: prefix('sort'),
	update: prefix('update'),
}
