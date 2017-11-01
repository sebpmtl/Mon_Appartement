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
   
  parseCSV: {
   const url = '../../static/logements-sociaux20170822.csv';
   var self = this;
       Papa.parse(url,{
       download: true,
       header: true,
       
       error: function(){

         console.log("Couldn't parse file!")

    },

       complete: function(results, file) {
       
       console.log("File parsed!")
       /*results.data[0]['Nom Projet']*/
         self.arrondissements.push(results.data[0].Numéro);
         
       
       }
  })
  }
       
  }
 

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
