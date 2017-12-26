import Vue from 'vue'
import Vuex from 'vuex'
import vuexCache from 'vuex-cache'
import * as logements from '../../data/logements.1.json'
import normalize from './utils.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projects: {}, // normalized -by id
    projectType: '',
    projectArea: '',
    page: 1,
    size: 200,
    pageNumber: 0

  },
  plugins: [vuexCache],
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      commit('SET_PROJECT_LIST', {list: normalize(logements)})
    }
  },
  /* The mutations calls are the only place that the store can be updated. */

  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    },
    updateType: (state, projectType) => {
      state.projectType = projectType
      state.page = 1
    },
    updateArea: (state, projectArea) => {
      state.projectArea = projectArea
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
      var deNormProj = Object.values(state.projects)
      return deNormProj.filter(project =>
        state.projectArea !== null
          ? project['Type_projet']
            .includes(state.projectType) && (project['Arrondissement'] || project['Nom_Villes_liées'])
            .includes(state.projectArea) : project['Type_projet']
            .includes(state.projectType))
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
