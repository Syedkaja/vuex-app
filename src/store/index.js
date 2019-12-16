import Vuex from "vuex"
import Vue from "vue"
import shop from "@/api/shop"
import {
  reject
} from "q"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  getters: { // = computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    fetchProducts({
      commit
    }) {
      return new Promise((resolve, reject) => {
        //make the call
        //run setProducts mutation
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve()
        });
      })
    }
  },

  mutations: {
    setProducts(state, products) {
      //updateProducts
      state.products = products;
    }
  }

})
