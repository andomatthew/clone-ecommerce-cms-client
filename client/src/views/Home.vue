<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="page-container">
        <md-app md-mode="reveal">
          <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon class="fa fa-bars"></md-icon>
            </md-button>
            <span class="md-title">E-COMMERCE-CMS</span>
          </md-app-toolbar>

          <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

            <md-list>
              <md-list-item>
                <router-link to="/about">About</router-link>
              </md-list-item>
              <md-list-item>
                <AddProductButton/>
              </md-list-item>

              <md-list-item>
                <a @click.prevent="logout" href="">Logout</a>
                <!-- <span class="md-list-item-text">Sent Mail</span> -->
              </md-list-item>

            </md-list>
          </md-app-drawer>
          <md-app-content>
            <!---->
            <div class="md-layout">
              <Card
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
            <!---->
          </md-app-content>
        </md-app>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import AddProductButton from '../components/AddProductButton'
export default {
  name: 'Home',
  data () {
    return {
      menuVisible: false,
      name: '',
      image_url: '',
      price: null,
      stocks: null,
      showAddForm: false
    }
  },
  components: {
    Card,
    AddProductButton
  },
  computed: {
    products () {
      return this.$store.state.products.data
    }
  },
  methods: {
    tes () {
      this.$router.push({ path: '/about' })
    },

    logout () {
      this.$store.dispatch('logout')
        .then(_ => {
          localStorage.setItem('access_token', '')
          this.$router.push({ path: '/' })
        })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.md-app-content {
  display: flex;
  height: 90vh;
}

</style>
