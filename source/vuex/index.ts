
import * as p__vuex from 'vuex'

import * as m__types from './types'
import d__module from './module'

const store_options: p__vuex.StoreOptions<m__types.state__root> = {
	state: {
		todos: [],
	},
	modules: {
		module: d__module,
	},
}

const store = new p__vuex.Store<m__types.state__root>(store_options)

export default store
