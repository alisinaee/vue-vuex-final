import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        }
    },
    mutations: {
        inc: state => {
            return state.counter++
        },
        dec: state => {
            return state.counter--
        },
    }
})

