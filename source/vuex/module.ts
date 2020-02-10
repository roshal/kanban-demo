
import * as p__axios from 'axios'
import * as p__vuex from 'vuex'

import * as m__types from './types'

const state = {
	todos: null,
}

const getters: p__vuex.GetterTree<m__types.state__module, m__types.state__root> = {
	todos: (state) => {
		return state.todos
	},
}

const mutations: p__vuex.MutationTree<m__types.state__module> = {
	set_todo: (state, payload) => {
		state.todos = payload
	},

	add_todo: (state, payload) => {
		state.todos.push(payload)
	},
}

const actions: p__vuex.ActionTree<m__types.state__module, m__types.state__root> = {
	get_todo: async (context, payload) => {
		let response = await p__axios.get('http://yourwebsite.com/api/todo')
		context.commit('SET_TODO', response.data)
	},
	save_todo: async (context, payload) => {
		let response = await p__axios.post('http://yourwebsite.com/api/todo')
		context.commit('ADD_TODO', payload)
	},
}

const module: p__vuex.Module = {
	state,
	getters,
	mutations,
	actions,
}

export default module
