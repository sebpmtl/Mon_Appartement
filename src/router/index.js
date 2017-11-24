import Vue from 'vue'
import Router from 'vue-router'
import SearchBox from '@/components/SearchBox'
import SearchResults from '@/components/SearchResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      components:{
        search: SearchBox,
        results: SearchResults

       
       
      } 
    }
  ]
})
