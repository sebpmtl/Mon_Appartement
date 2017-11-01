import Vue from 'vue'
import SearchBox from '@/components/SearchBox'

describe('SearchBox', () => {
  it('has mounted hook', () => {
    const Constructor = Vue.extend(SearchBox)
    const vm = new Constructor().$mount()
    expect(SearchBox.mounted).to.be.a('function')
  })
})
