<template>
  <div>
      <div class="page-container">
        <md-app md-mode="reveal">
          <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon class="material-icons">navigate_next</md-icon>
            </md-button>
            <span class="md-title">Welcome, {{user.email}}</span>
          </md-app-toolbar>

          <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

            <md-list>
              <md-list-item>
                <AddProductButton/>
              </md-list-item>

              <md-list-item>
                <md-button @click.prevent="logout">
                  <md-icon class="material-icons">logout</md-icon> Logout
                </md-button>
              </md-list-item>

            </md-list>
          </md-app-drawer>
          <md-app-content>
            <!---->
            <div class="md-layout md-gutter">
              <Card
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            <EmptyState
              v-if="products.length === 0"
            />
            </div>
            <!---->
             <md-snackbar :md-position="position" :md-active.sync="showSnackbar" md-persistent>
              <span>hello</span>
              <md-button v-if="check" class="md-primary" @click="showSnackbar = false">Retry</md-button>
            </md-snackbar>
          </md-app-content>
        </md-app>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import AddProductButton from '../components/AddProductButton'
import EmptyState from '../components/EmptyState'
export default {
  name: 'Home',
  data () {
    return {
      menuVisible: false,
      name: '',
      image_url: '',
      price: null,
      stocks: null,
      showAddForm: false,
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      message: ''
    }
  },
  components: {
    Card,
    AddProductButton,
    EmptyState
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    user () {
      return this.$store.state.currentUser
    },
    getErrorStatus () {
      return this.$store.state.homeErrorMessage
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(_ => {
          localStorage.setItem('access_token', '')
          localStorage.setItem('email', '')
          this.$router.push({ path: '/' })
        })
    },
    check () {
      if (this.getErrorStatus) {
        this.showSnackbar = true
        return true
      }
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('getCurrentUser')
  }
}
</script>

<style scoped>
.md-app-content {
  display: flex;
  height: 90vh;
}
.md-layout {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

</style>
