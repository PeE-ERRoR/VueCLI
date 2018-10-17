import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    items: []
  },
  mutations: {
    SET_COINS (state, coins) {
      state.coins = coins
    },
    SET_ITEM (state, items) {
      state.items = items
    }
  },
  actions: {
    loadCoins ({ commit }) {
      axios
        .get('http://localhost:4000/results')
        .then(r => r.data)
        .then(coins => {
        commit('SET_COINS', coins)
        })
    },
    loadItems ({ commit }) {
      axios
        .get('http://localhost:4001/results')
        .then(r => r.data)
        .then(items => {
        commit('SET_ITEM', items)
        })
    },
  }
})
