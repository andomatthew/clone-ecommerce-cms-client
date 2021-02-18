import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'hello ando',
    currentUser: {
      id: null,
      email: ''
    },
    products: []
  },
  mutations: {
    // menerima parameter state agar bisa diubah2 statenya
    // nama functionnya biasa disebut 'event'

    setCurrentUser (state, payload) {
      state.currentUser = payload
    },
    logout (state) {
      state.currentUser.id = null
      state.currentUser.email = ''
    },
    fetchProducts (state, payload) {
      state.products = payload
    },
    setNewProduct (state, payload) {
      console.log('masuk mutation ================')
      console.log(payload)
      state.products.push(payload.data)
    },
    deleteProduct (state, payload) {
      console.log('masuk mutation-delete product')
      const output = state.products.filter(el => {
        if (el.id !== payload) {
          return el
        }
      })
      state.products = output
    }
  },
  actions: {
    loginUser (context, user) {
      axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: user.email,
          password: user.password
        }
      }).then(({ data }) => {
        const user = {
          id: data.id,
          email: data.email
        }
        const accessToken = data.access_token
        localStorage.setItem('access_token', accessToken)
        context.commit('setCurrentUser', user)
      }).catch((xhr, status) => {
        console.log(xhr)
      })
    },
    logout (context) {
      context.commit('logout')
    },
    fetchProducts (context) {
      console.log('masuk fetch index store')
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(products => {
          console.log(products)
          context.commit('fetchProducts', products)
        })
        .catch((xhr, status) => {
          console.log(xhr)
        })
    },
    addProduct (context, product) {
      console.log(product, '=========')
      axios({
        url: '/products',
        method: 'POST',
        headers: { access_token: localStorage.getItem('access_token') },
        data: product
      })
        .then(product => {
          console.log('sukses bkin produ')
          context.commit('setNewProduct', product)
        })
        .catch((xhr, status) => {
          console.log(xhr)
        })
    },
    deleteProduct (context, productId) {
      axios({
        url: `/products/${productId}`,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(_ => {
          context.commit('deleteProduct', productId)
        })
        .catch((xhr, status) => {
          console.log(xhr)
        })
    }
  },
  modules: {
  }
})
