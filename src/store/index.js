import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      projects:[],
      e7: []
  },
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
        axios.get('../static/logements.json').then((response) => {
          commit('SET_PROJECT_LIST', { list: response.data })
        }, (err) => {
          console.log(err)
        })
      }
  },
  /* The mutations calls are the only place that the store can be updated.*/

  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
        state.projects = list
      },
      updateE7: (state,e7)=> {
        state.e7 = e7
      }
  },
  /* use with computed */

  getters: {
    filteredProjects: state => {
        return state.projects.filter(project => project['Type_projet'].includes(state.e7))
  
  }
}
 
})

export default store