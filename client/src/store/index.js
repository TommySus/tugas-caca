import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          divisi: payload.divisi
        }
      })
    },
    addMail (context, payload) {
      return axios({
        method: 'POST',
        url: '/mail',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          kepada: payload.kepada,
          perihal: payload.perihal,
          keterangan: payload.keterangan,
          instansi: payload.instansi,
          jenisSurat: payload.jenisSurat
        }
      })
    },
    searchMail (context, payload) {
      return axios({
        method: 'GET',
        url: '/mail/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
