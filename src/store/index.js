import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageList: [],
    nowPage: [],
    nowId: 0,
    loading: true
  },
  mutations: {
    initPostList (state, data) {
      state.pageList = data
      return state.pageList
    },
    getNowId (state, id) {
      state.nowId = id
    },
    loadStatus (state, flag) {
      state.loading = flag
    }
  },
  actions: {
    async getPageList (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/pages')
      state.commit('initPostList', res.data)
      return res.data
    }
  },
  getters: {

  }
})
