<template>
  <v-card flat>
      <v-card-text>
        <v-container>
          <v-layout  row wrap>
            <v-flex>
              <v-select
                v-bind:items="projects"
                v-model="a1"
                label="Recherche"
                autocomplete
                clearable
                item-text="Nom Projet"             
              ></v-select>
              <v-select
                label="Type d'habitation"
                v-bind:items="type"
                v-model="e7"
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
import { mapState } from 'vuex'

export default {
  name: "SearchBox",
  data(){
    return {
      type: ['Coop','HLM','OBNL','SHDM'],
      a1:[]
    }
  },
  computed:{ ...mapState([
    'projects'
  ]),
  

  e7: {
     get () {
      return this.$store.state.e7
    },
    set (value) {
      this.$store.commit('updateE7', value)
    }
  }

  }
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card__text {
  padding: 0px;
}

.card {
  width: 600px;
  height: 190px;
}
</style>
