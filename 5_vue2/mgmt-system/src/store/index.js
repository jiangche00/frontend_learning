import Vue from 'vue'
import Vuex from 'vuex'
import { Api } from '@/utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    row:{},
    role:"",
  },
  getters: {
  },
  mutations: {
    setRow(state,payload){
      state.row = payload;
    },
    setRole(state,payload){
      state.role = payload;
    }
  },
  actions: {
    async getRole({commit}){
      let {role} = await Api.get("/getRole");
      commit("setRole", role);
    }
  },
  modules: {
  }
})
