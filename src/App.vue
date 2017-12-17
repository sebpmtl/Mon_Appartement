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
      <v-toolbar-title>Mon Appartement</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center row wrap>
          <search-box></search-box>
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
import SearchBox from '@/components/SearchBox'

export default {
  name: 'app',
  components: {

    SearchBox

  },
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  },
  mounted: function () {
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
   



