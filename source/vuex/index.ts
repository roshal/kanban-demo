
import * as p__vuex from 'vuex'

import * as m__module from './module'
import * as m__types from './types'

const store_options: p__vuex.StoreOptions<m__types.state__root> = {
	state: {
		version: '1.0.0',
	},
	modules: {
		module: m__module,
	},
}

export default new p__vuex.Store<m__types.state__root>(store_options)
