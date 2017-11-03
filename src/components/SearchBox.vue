<template>
  <v-card flat>
      <v-card-text>
        <v-container>
          <v-layout  row wrap>
            <v-flex>
              <v-select
                v-bind:items="complete_row"
                v-model="a1"
                label="Recherche"
                autocomplete
                clearable
               
              ></v-select>
              
           
             
              <v-select
                label="Type d'habitation"
                v-bind:items="type"
                v-model="e7"
                multiple
                chips
                hint="Choisir un ou plusieurs choix"
                persistent-hint
              
              ></v-select>
            </v-flex>
            
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
</template>

<script>
import Papa from "../../node_modules/papaparse";

export default {
  name: "SearchBox",
  data() {
    return {
      a1: null,
      e7: [],
      complete_row: [],
      toggle_multiple: [0,1,2],
      type:["COOP","HLM","HLM pour personnes agées","OBNL"]
    };
  },

  mounted() {
    parseCSV: {
      const url = "../../static/logements-sociaux20170822.csv";
      var self = this;
      Papa.parse(url, {
        download: true,
        header: true,

        error: function() {
          console.log("Couldn't parse file!");
        },

        complete: function(results, file) {
          console.log("File parsed!");
          /*results.data[0]['Nom Projet']*/
          for (let i=0; i < results.data.length; i ++){
            console.log(results.data[i]['Nom Projet']);
            let row = results.data[i];
            self.complete_row.push(row['Nom Projet']);
          }
          
          self.complete_row.reduce((x, y) => x.includes(y) ? x : [...x, y], [])
          /*self.arrondissements.push(results.data[0].Numéro);*/
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card__text{
  padding: 0px;
}

.card{
  width: 600px;
  height: 190px;
}

</style>
