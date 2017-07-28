import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  posts: []
}

// getters
const getters = {
  allPosts: state => state.all
}

// actions
const actions = {
  fetchPosts ({ commit }) {
    // do the async functions in here
    Vue.http.get('https://dougajmcdonald.azurewebsites.net/api/GetBlogPosts?code=y8HLRCA5DfnCkZScKvAoobjqc5cUZF9aSAsiJMAuisoBfTFqutvBSw==')
      .then((response) => {
        const posts = JSON.parse(JSON.parse(response.bodyText))
        commit(types.SET_POSTS, posts)
      })
  }
}

// mutations
const mutations = {
  [types.SET_POSTS] (state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
