import * as types from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            { is_do: false, title: 'タスク1' },
            { is_do: true, title: 'タスク2' },
            { is_do: false, title: 'タスク3' }
        ]
    },
    actions: {
        [types.ADD_TASK]({ commit }, title) {
            let newItem = {
                title: title,
                status: '未',
                is_do: false
            }
            commit(types.ADD_TASK, {
                data: newItem
            })
        },
        [types.DONE_TASK]({ commit }, item) {
            commit(types.DONE_TASK, {
                data: item
            })
        }
    },
    mutations: {
        [types.ADD_TASK](state, payload) {
            state.items.push(payload.data);
        },
        [types.DONE_TASK](state, payload) {
            let index = state.items.indexOf(payload.data)
            state.items[index].is_do = !payload.data.is_do
            if (state.items[index].status === '済') {
                state.items[index].status = '未'
            } else {
                state.items[index].status = '済'
            }
        }
    }
})