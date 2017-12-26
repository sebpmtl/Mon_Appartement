<template>
  <v-app dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-layout>
        <v-flex>
      <v-toolbar-title class="display-1 main_title">Mon Appartement</v-toolbar-title>
        </v-flex>
      </v-layout>
       <v-layout  row wrap justify-end>
            <v-flex>
              <v-select
                
                v-model="a1"
                label="Recherche"
                autocomplete
                cache-items
                clearable
                item-text="Nom Projet"   
              
              ></v-select>
            </v-flex>
          </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center row wrap>
          <search-filters></search-filters>
         <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed style="justify-content:center">
       <div class="text-xs-center">
      <v-pagination :length="pageNumber" v-model="page"></v-pagination>
    </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import SearchFilters from '@/components/SearchFilters'

export default {
  name: 'app',
  components: {

    SearchFilters

  },
  data: () => ({
    drawer: false,
    a1: ''
  }),
  props: {
    source: String
  },
  created: function () {
    this.$store.cache.dispatch('LOAD_PROJECT_LIST')
  },
  computed: {
    ...mapState([
      'pageNumber'
    ]),

    page: {
      get () {
        return this.$store.state.page
      },
      set (value) {
        this.$store.commit('updatePage', value)
      }
    }
  }

}
</script>
   

<style scoped>

.main_title{
  text-overflow: none;
  overflow: visible;
}
</style>

