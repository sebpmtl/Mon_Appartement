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
            <v-flex  class="py-2">
              <v-btn-toggle v-model="e7">
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
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters} from 'vuex'
 
export default {
  name: "SearchBox",
  data(){
    return {
      type: ['Coop','HLM','OBNL','SHDM'],
      a1:[],
      search: null
    }
  },
  computed:{ ...mapState([
    'projects'
  ]),

  ...mapGetters([

    'deDuped'
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

/* temporary */

.card__text {
  padding: 0px;
}

.card {
  width: 600px;
  height: 190px;
}

</style>
