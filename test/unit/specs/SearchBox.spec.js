import Vue from 'vue'
import SearchBox from '@/components/SearchBox'
import Vuetify from 'vuetify'

Vue.use(Vuetify);


var app = document.createElement('div')
app.setAttribute('data-app', true)
document.body.appendChild(app)

describe('SearchBox', () => {
  it('has mounted hook', () => {
    const Constructor = Vue.extend(SearchBox)
    const vm = new Constructor().$mount()
    expect(SearchBox.mounted).to.be.a('function')
  })
})
