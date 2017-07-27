import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allPlayers: state => state.all
}

// actions
const actions = {
  getAllPlayers ({ commit }) {
    // do the async functions in here
    // shop.getProducts(products => {
    //   commit(types.RECEIVE_PRODUCTS, { products })
    // })
  }
}

// mutations
const mutations = {
//   [types.RECEIVE_PRODUCTS] (state, { products }) {
//     state.all = products
//   },

  [types.ADD_PLAYER] (state, playerName) {
    state.all.push(playerName)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
