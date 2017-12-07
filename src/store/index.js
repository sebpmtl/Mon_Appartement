import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vuexCache from 'vuex-cache'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      projects:[],
      e7: [],
      page:1,
      size: 200,
      pageNumber: 0
  
  },
  plugins:[vuexCache],
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
        axios.get('../static/logements.1.json').then((response) => {
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
        state.page = 1
      },
      updatePage: (state,page)=> {
        state.page = page
      }
  },
  /* use with computed */

  getters: {
    filteredProjects: state => {
      return state.projects.filter(project =>
        state.e7.length !== 0 ? project['Type_projet'].includes(state.e7) : project)

    },
    deDuped: state =>{
      return state.projects.reduce((x,y) => x.findIndex(e => e['Nom Projet']== y['Nom Projet']) < 0? [...x,y]:x,[])
    },
    paginated: (state, filteredProjects) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      const index = (state.page - 1) * state.size
      const paginate = store.getters.filteredProjects.slice(index, index + state.size)
      state.pageNumber = Math.ceil(store.getters.filteredProjects.length / state.size)
      return paginate
    }
  }

})

export default store