<template>
<v-flex xs12 class="mt-5">
  <h3 id="resultats"><i>{{ filteredProjects.length }} Résultats:</i></h3>
<v-list three-line v-if="paginated.length > 0">
  
            <template  v-for="(item,index) in paginated">
              <v-list-tile :key="index"  >
                <v-flex xs5>
               <v-list-tile-content>
                  <v-list-tile-title v-html="item['Nom Projet']"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item['Numéro']+' '+item['Nom_rue_role']"></v-list-tile-sub-title>
                 <v-list-tile-sub-title v-html="item['Arrondissement'] || item['Nom_Villes_liées']"></v-list-tile-sub-title>
                </v-list-tile-content>
                </v-flex> 
                <v-flex xs3>
                  <v-list-tile-content v-if="projectType === 'HLM'">
                   <v-list-tile-sub-title v-html="item['Logements_HLM_Familles']+' HLM familles'"></v-list-tile-sub-title>
                   <v-list-tile-sub-title v-html="item['Logements_HLM_Personnes âgées']+' HLM personnes âgées'"></v-list-tile-sub-title>
                   <v-list-tile-sub-title v-html="item['Logements_HLM_Autres']+' HLM autres'"></v-list-tile-sub-title>
                
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
                  <v-list-tile-sub-title v-html="item['Type_projet']"></v-list-tile-sub-title>
                  <v-list-tile-sub-title v-if="item['Type_programme'] !== '' " v-html="'programme: ' + item['Type_programme'] "></v-list-tile-sub-title>
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
          <h2 id="no-results">Désolé! Il n'y a aucun logement social à cet endroit.</h2>
          </v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
          </template>
          </v-list>         
</v-flex>
</template>


<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SearchResults',
  data: () => ({}),
  computed: {
    ...mapGetters(['paginated',
      'filteredProjects'
    ]),
    ...mapState([
      'projectType'
    ])
  }
}
</script>

<style scoped>

</style>