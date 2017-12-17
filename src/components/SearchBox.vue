<template>
  <v-card flat id="search">
      <v-card-text>
        <v-container>
          <v-layout  row wrap>
            <v-flex>
              <v-select
                :items="deDuped"
                v-model="a1"
                label="Recherche"
                autocomplete
                cache-items
                clearable
                item-text="Nom Projet"   
              
              ></v-select>
            </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex class="py-2">
              <v-btn-toggle  v-model="e7">
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
              <v-flex xs12 sm6>
          <v-select
          class="drop"
            label="Arrondissements/Villes Liées"
            :items="arrondissements.concat(villes)"
            v-model="e6"
            chips
            persistent-hint
            clearable
          ></v-select>
        </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
    ...mapState(['projects']),

    ...mapGetters(['deDuped']),

    e7: {
      get () {
        return this.$store.state.e7
      },
      set (value) {
        this.$store.commit('updateE7', value)
      }
    },
    e6: {
      get () {
        return this.$store.state.e6
      },
      set (value) {
        this.$store.commit('updateE6', value)
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

#search{
  width: 600px;
  height: 190px!important;
}
</style>
