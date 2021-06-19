import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageList: [],
    nowPage: [],
    nowId: 0,
    loading: true,
    pno: 0,
    size: 6,
    total: 0
  },
  mutations: {
    initPostList (state, data) {
      state.pageList = data
    },
    getNowId (state, id) {
      state.nowId = id
    },
    loadStatus (state, flag) {
      state.loading = flag
    },
    changeSize (state, pno, size) {
      state.pon = pno
      state.size = size
    },
    changeTotal (state, total) {
      state.total = total
    }
  },
  actions: {
    async getPageList (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/pages')
      state.commit('initPostList', res.data)
    },
    async getTotal (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/pages')
      state.commit('changeTotal', res.data.length)
    }
  },
  getters: {

  }
})
