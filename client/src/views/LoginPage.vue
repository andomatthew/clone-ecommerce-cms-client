<template>
  <div class="md-layout">
    <div class="md-layout-item item-1"></div>
    <div class="md-layout-item item-2">
      <form @submit.stop.prevent="loginUser">
        <div class="md-card">
          <div class="md-card-header">
            <div class="md-headline">Login</div>
          </div>
          <div class="md-card-content">
            <md-field>
              <label for="">Email</label>
              <md-input v-model="email" placeholder="Email"></md-input>
            </md-field>
            <md-field>
              <label for="">Password</label>
              <md-input v-model="password" placeholder="Password" type="password"></md-input>
            </md-field>
          </div>
          <md-card-actions>
            <md-button type="submit" class="md-primary">Login</md-button>
             <md-snackbar :md-position="position" :md-active.sync="showSnackbar" md-persistent>
              <span>{{errorMessage || 'Success'}}</span>
              <md-button v-if="errorMessage" class="md-primary" @click="showSnackbar = false">Retry</md-button>
            </md-snackbar>
          </md-card-actions>
        </div>
      </form>
    </div>
    <div class="md-layout-item item-3"></div>
  </div>
</template>

<script>
export default {
  name: 'showSnackBar',
  data () {
    return {
      email: '',
      password: '',
      showSnackbar: false,
      position: 'center',
      duration: 4000
    }
  },
  methods: {
    loginUser () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginUser', user)
        .then(_ => {
          if (this.errorMessage) {
            this.showSnackbar = true
          } else {
            this.showSnackbar = true
            this.$router.push({ name: 'Home' })
          }
        })
    }
  },
  computed: {
    errorMessage () {
      return this.$store.state.message
    },
    getLoginStatus () {
      return this.$store.state.loginStatus
    }
  }
}
</script>

<style scoped>
.md-layout {
  height: 100vh;
  display: flex;
  align-items: center;
}
.item-2 {
  position: relative;
  background-color: #4b4b4b;
  height: 46.5%;
}
</style>
