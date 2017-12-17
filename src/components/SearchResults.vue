<template>
<v-flex s12 md9>
<v-list two-line v-if="paginated.length > 0">
            <template  v-for="(item,index) in paginated">
              <v-list-tile :key="index"  >
                <v-flex xs4>
                  
               <v-list-tile-content>
                  <v-list-tile-title v-html="item['Nom Projet']"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item['Type_projet']"></v-list-tile-sub-title>
                </v-list-tile-content>
                </v-flex> 
                <v-flex xs3>
                  <v-list-tile-content>
                  <v-list-tile-sub-title v-html="item['Numéro']+' '+item['Nom_rue_role']"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="item['Arrondissement'] || item['Nom_Villes_liées']"></v-list-tile-sub-title>
                
                  </v-list-tile-content>
                </v-flex>
                <v-flex xs2>
                  <v-list-tile-content>
                  <v-list-tile-sub-title v-html="item['Nb_Logements']+' logements'"></v-list-tile-sub-title>
                 <v-list-tile-sub-title></v-list-tile-sub-title>
                
                  </v-list-tile-content>
                </v-flex>
                <v-flex xs2>
                  <v-list-tile-content >
                  <v-list-tile-sub-title v-html="'programme: ' + item['Type_programme']"></v-list-tile-sub-title>
                 <v-list-tile-sub-title></v-list-tile-sub-title>
                
                  </v-list-tile-content>
                </v-flex>

              </v-list-tile>
                 <v-divider :key="index"></v-divider>
                 
            </template>
            
          </v-list>
<v-list v-else>
  <template>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>
          <h2 id="no-results">Aucuns Résultats</h2>
          </v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
          </template>
          </v-list>         
</v-flex>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchResults',
  data: () => ({}),
  computed: {
    ...mapGetters(['paginated'])
  }
}
</script>

<style scoped>
#no-results {
  font-style: oblique;
}

</style>