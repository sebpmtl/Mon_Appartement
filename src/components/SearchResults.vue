<template>
<v-flex xs9>
<v-list three-line>
            <template v-for="item in filteredProjects">
              <v-list-tile>
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
</v-flex>
</template>


<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: "SearchResults",
    computed: {
     
   ...mapGetters([

          'filteredProjects'
   ])

  
    }
}
</script>