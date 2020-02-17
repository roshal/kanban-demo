
import * as p__vuex from 'vuex'
import i__axios from 'axios'

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
		const response = await i__axios.get('http://yourwebsite.com/api/todo')
		context.commit('SET_TODO', response.data)
	},
	save_todo: async (context, payload) => {
		const response = await i__axios.post('http://yourwebsite.com/api/todo')
		context.commit('ADD_TODO', payload)
	},
}

const module = {
	state,
	getters,
	mutations,
	actions,
}

export default module
