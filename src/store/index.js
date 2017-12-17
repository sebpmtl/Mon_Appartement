import Vue from 'vue'
import Vuex from 'vuex'
import vuexCache from 'vuex-cache'
import * as logements from '../../data/logements.1.json'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projects: [],
    e7: '',
    e6: '',
    page: 1,
    size: 200,
    pageNumber: 0

  },
  plugins: [vuexCache],
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      commit('SET_PROJECT_LIST', {list: logements})
    }
  },
  /* The mutations calls are the only place that the store can be updated. */

  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    },
    updateE7: (state, e7) => {
      state.e7 = e7
      state.page = 1
    },
    updateE6: (state, e6) => {
      state.e6 = e6
    },
    updatePage: (state, page) => {
      state.page = page
    }
  },
  /** TODO: default params
   *
   * @returns {Array.<objects>}
   */

  getters: {
    filteredProjects: state => {
      console.count()
      return state.projects.filter(project =>
        state.e6 !== null
          ? project['Type_projet']
            .includes(state.e7) && (project['Arrondissement'] || project['Nom_Villes_liées'])
            .includes(state.e6) : project['Type_projet']
            .includes(state.e7))
    },

    deDuped: state => {
      return state.projects.reduce((x, y) => x.findIndex(e => e['Nom Projet'] === y['Nom Projet']) < 0 ? [...x, y] : x, [])
    },
    paginated: (state, filteredProjects) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      const index = (state.page - 1) * state.size
      const paginate = store.getters.filteredProjects.slice(index, index + state.size)
      state.pageNumber = Math.ceil(store.getters.filteredProjects.length / state.size)
      return paginate
    }
  }

})

export default store
