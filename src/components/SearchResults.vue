<template>
<v-flex xs9>
<v-list two-line>
            <template v-for="item in paginated">
              
              <v-list-tile :key="paginated.indexOf(item)">
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
                 <v-divider></v-divider>
            </template>
          </v-list>

          
</v-flex>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "SearchResults",
  data: () => ({}),
  computed: {
    ...mapGetters(["paginated"])
  }
};
</script>

<style scoped>

</style>