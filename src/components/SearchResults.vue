<template>
<v-flex xs9>
<v-list three-line>
            <template v-for="item in paginated">
              <v-list-tile :key="item.id">
                <v-flex xs6>
               <v-list-tile-content>
                  <v-list-tile-title v-html="item['Nom Projet']"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item['Type_projet']"></v-list-tile-sub-title>
                </v-list-tile-content>
                </v-flex> 
                <v-flex xs6>
                 <v-list-tile-sub-title v-html="item['Arrondissement'] || item['Nom_Villes_liées']"></v-list-tile-sub-title>
                </v-flex>

              </v-list-tile>
            </template>
          </v-list>

           <div class="text-xs-center">
      <v-pagination :length="6" v-model="page"></v-pagination>
    </div>
</v-flex>
</template>


<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: "SearchResults",
    data: () => ({
      
    }),
    computed: {
     
   ...mapGetters([

          'filteredProjects',
          'paginated'

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



</style>