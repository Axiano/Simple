import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'https://demoapi.axian.fun/'
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
    aru: [],
    emoji1: [],
    emoji2: [],
    emoji3: []
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
      for (let i = 0; i < 40; i++) {
        state.emoji1.push(state.aru[i])
      }
      for (let i = 40; i < 85; i++) {
        state.emoji2.push(state.aru[i])
      }
      for (let i = 85; i < 116; i++) {
        state.emoji3.push(state.aru[i])
      }
    }
  },
  actions: {
    async getPageList (state) {
      const { data: res } = await axios.get('api/pages')
      state.commit('initPostList', res.data)
    },
    async getTotal (state) {
      const { data: res } = await axios.get('api/pages')
      state.commit('changeTotal', res.data.length)
    },
    async getTimeLinks (state) {
      const { data: res } = await axios.get('api/timelinks')
      state.commit('changeTimelinks', res.data)
    },
    async getComments (state) {
      const { data: res } = await axios.get('api/getcomments')
      state.commit('changeComments', res.data)
    },
    async getReply (state) {
      const { data: res } = await axios.get('api/getreply')
      state.commit('changeReply', res.data)
    },
    getaru (state) {
      axios.get('https://axian.fun/aru.json').then(response => {
        state.commit('changearu', response.data.aru.container)
      })
    }
  },
  getters: {
  }
})
