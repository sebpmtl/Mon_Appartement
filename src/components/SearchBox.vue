<template>
  <v-card flat>
      <v-card-text>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12>
              <v-select
                v-bind:items="arrondissements"
                v-model="a1"
                label="Recherche"
                autocomplete
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
</template>

<script>
import Papa from '../../node_modules/papaparse'

export default {
  name: 'SearchBox',
  data () {
    return {
       a1: null,
      arrondissements: []
      
      
    }
  },
  
  mounted(){
   
  
   const url = '../../static/logements-sociaux20170822.csv';

   var parsed = Papa.parse(url,{
       download: true,
       header: true,
       
       complete: function(results, file) {
      console.log("Parsing complete:", results.data);

         }
       
  })
 
       
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
