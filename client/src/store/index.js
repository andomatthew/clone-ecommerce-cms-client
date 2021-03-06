import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: '',
    currentUser: {
      id: null,
      email: ''
    },
    loginStatus: false,
    products: [],
    homeErrorMessage: ''
  },
  mutations: {
    // menerima parameter state agar bisa diubah2 statenya
    // nama functionnya biasa disebut 'event'

    setCurrentUser (state, payload) {
      state.message = null
      state.currentUser = payload
      state.loginStatus = true
    },
    logout (state) {
      state.currentUser.id = null
      state.currentUser.email = ''
      state.loginStatus = false
    },
    fetchProducts (state, payload) {
      state.products = payload
    },
    setNewProduct (state, payload) {
      console.log('mutation add product')
      state.homeErrorMessage = ''
      state.products.push(payload.data)
    },
    deleteProduct (state, payload) {
      console.log(payload)
      console.log('masuk mutation-delete product')
      const output = state.products.filter(el => {
        if (el.id !== payload) {
          return el
        }
      })
      state.products = output
    },
    setNewProductDetail (state, payload) {
      const output = state.products.map(el => {
        if (el.id === payload.id) {
          el = payload
        }
        return el
      })
      state.products = output
    },
    setNewProductStock (state, payload) {
      const output = state.products.map(el => {
        if (el.id === payload.id) {
          el = payload
        }
        return el
      })
      console.log(output, '=====')
      this.state.products = output
    },
    setLoggedInUser (state) {
      state.currentUser.email = localStorage.getItem('email')
    },
    setLoginError (state, payload) {
      state.message = ''
      state.message = payload
    },
    setErrorHome (state, payload) {
      state.homeErrorMessage = null
      state.homeErrorMessage = payload
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
        localStorage.setItem('email', user.email)
        context.commit('setCurrentUser', user)
      }).catch((xhr, status) => {
        const message = xhr.response.data.message
        context.commit('setLoginError', message)
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
        .then(resp => {
          // console.log(products)
          console.log(resp.data)
          context.commit('fetchProducts', resp.data)
        })
        .catch((xhr, status) => {
          console.log(xhr)
        })
    },
    addProduct (context, product) {
      console.log('axios add product')
      axios({
        url: '/products',
        method: 'POST',
        headers: { access_token: localStorage.getItem('access_token') },
        data: product
      })
        .then(product => {
          console.log(context)
          context.commit('setNewProduct', product)
        })
        .catch((xhr, status) => {
          console.log(context, '============')
          const message = xhr.response.data.message
          context.commit('setErrorHome', message)
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
    },
    editProductDetail (context, product) {
      axios({
        url: `/products/${product.id}`,
        method: 'PUT',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: product.name,
          image_url: product.image_url,
          price: product.price,
          stocks: product.stocks
        }
      })
        .then(product => {
          const editedProduct = product.data[1][0]
          context.commit('setNewProductDetail', editedProduct)
        })
        .catch((xhr, status) => {
          console.log(xhr.response)
        })
    },
    updateStocks (context, product) {
      axios({
        url: `/products/${product.id}`,
        method: 'PATCH',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          stocks: product.stocks
        }
      })
        .then(product => {
          const updatedStock = product.data[1][0]
          context.commit('setNewProductStock', updatedStock)
        })
        .catch((xhr, status) => {
          console.log(xhr.response.data)
        })
    },
    getCurrentUser (context) {
      context.commit('setLoggedInUser')
    }
  },
  modules: {
  }
})
