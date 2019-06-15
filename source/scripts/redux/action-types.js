
import * as ms__tokens from './tokens'


const prefix = (name) => {
	return [ms__tokens.token, name].join('--')
}

export default {
	reset: prefix('reset'),
}
