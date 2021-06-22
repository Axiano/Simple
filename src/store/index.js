import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timelinks: [],
    pageList: [],
    comments: [],
    reply: [],
    nowPage: [],
    nowId: 0,
    loading: true,
    pno: 0,
    size: 6,
    total: 0,
    aru: []
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
    },
    changeTimelinks (state, data) {
      state.timelinks = data
    },
    changeComments (state, data) {
      state.comments = data
    },
    changeReply (state, data) {
      state.reply = data
    },
    changearu (state, data) {
      state.aru = data
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
    },
    async getTimeLinks (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/timelinks')
      state.commit('changeTimelinks', res.data)
    },
    async getComments (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/getcomments')
      state.commit('changeComments', res.data)
    },
    async getReply (state) {
      const { data: res } = await axios.get('http://api.axian.fun/api/getreply')
      state.commit('changeReply', res.data)
    },
    getaru (state) {
      axios.get('./js/aru.json').then(response => {
        state.commit('changearu', response.data.aru.container)
      })
    }
  },
  getters: {

  }
})
