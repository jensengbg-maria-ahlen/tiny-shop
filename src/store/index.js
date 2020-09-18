import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      {
        name: 'Tea pot', 
        price: 50
      },
      {
        name: 'Bowl', 
        price: 90
      },
      {
        name: 'Plate', 
        price: 100
      },
      {
        name: 'Book', 
        price: 200
      },
    ]
  },
  mutations: {
    reducePrice: state => {
      state.products.forEach( product => {
        product.price -= 1
      })
    }
  },
  actions: {
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
          return {
              name: '*' + product.name + '*',
              price: product.price / 2
          }
      });
      return saleProducts
    }
  }
})
