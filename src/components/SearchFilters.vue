<template>
        <v-container>
            <v-layout row wrap>
           <v-flex xs5>
              <v-btn-toggle  v-model="projectType" class="types">
  
                <v-btn color="red" flat value="">
                  Tous
                </v-btn>
                <v-btn color="blue" flat value="Coop">
                  COOP
                </v-btn>
                <v-btn color="deep-orange" flat value="HLM">
                  HLM
                </v-btn>
                <v-btn color="light-green accent-3" flat value="OBNL">
                  OBNL
                </v-btn>
                <v-btn color="amber lighten-2" flat value="SHDM">
                  SHDM
                </v-btn>
                 
              </v-btn-toggle>
           </v-flex>
            <v-flex xs4>
          <v-select 
          class="drop"
            label="Arrondissements/Villes Liées"
            :items="arrondissements.concat(villes)"
            v-model="projectArea"
            chips
            persistent-hint
            clearable
          ></v-select>
        </v-flex> 
          </v-layout>
        </v-container>
   
</template>

<script>

export default {
  name: 'SearchBox',
  data () {
    return {
      a1: [],
      search: null,
      villes: [
        "Baie-D'Urfé",
        'Beaconsfield',
        'Côte-Saint-Luc',
        'Dollard-des-Ormeaux',
        'Dorval',
        'Hampstead',
        'Kirkland',
        'Montréal-Est',
        'Montréal-Ouest',
        'Mont Royal',
        'Pointe-Claire',
        'Sainte-Anne-de-Bellevue',
        'Senneville',
        'Westmount'
      ],
      arrondissements: [
        'Ahuntsic-Cartierville',
        'Anjou',
        'Côte-des-Neiges–Notre-Dame-de-Grâce',
        'Lachine',
        'LaSalle',
        'Le Plateau-Mont-Royal',
        'Le Sud-Ouest',
        "L'île-Bizard-Sainte-Geneviève",
        'Mercier-Hochelaga-Maisonneuve',
        'Montréal-Nord',
        'Outremont',
        'Pierrefonds-Roxboro',
        'Rivière-des-Prairies-Pointe-aux-Trembles',
        'Rosemont-La Petite-Patrie',
        'Saint-Laurent',
        'Saint-Léonard',
        'Verdun',
        'Ville-Marie',
        'Villeray-Saint-Michel-Parc-Extension'
      ]
    }
  },
  computed: {

    projectType: {
      get () {
        return this.$store.state.projectType
      },
      set (value) {
        this.$store.commit('updateType', value)
      }
    },
    projectArea: {
      get () {
        return this.$store.state.projectArea
      },
      set (value) {
        this.$store.commit('updateArea', value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* temporary */


.card__text {
  padding: 0px;
}


</style>
