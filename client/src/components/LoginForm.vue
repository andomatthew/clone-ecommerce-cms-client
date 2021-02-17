<template>
  <div class="md-layout">
    <div class="md-layout-item item-1"></div>
    <div class="md-layout-item item-2">
      <form @submit.prevent="loginUser">
        <div class="md-card">
          <div class="md-card-header">
            <div class="md-headline">Login</div>
          </div>
          <div class="md-card-content">
            <md-field>
              <label for="">Email</label>
              <md-input v-model="email" placeholder="This is placeholder"></md-input>
            </md-field>
            <md-field>
              <label for="">Password</label>
              <md-input v-model="password" placeholder="This is also placeholder" type="password"></md-input>
            </md-field>
          </div>
          <md-card-actions>
            <md-button type="submit" class="md-primary">Login</md-button>
          </md-card-actions>
        </div>
      </form>
    </div>
    <div class="md-layout-item item-3"></div>
  </div>
</template>

<script>
import axios from '../api/axios'
export default {
  props: ['setCurrentUser'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
  },
  methods: {
    loginUser () {
      axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(({ data }) => {
        const userId = data.id
        const userEmail = data.email
        const accessToken = data.access_token

        localStorage.setItem('access_token', accessToken)
        this.setCurrentUser(userId, userEmail)
        this.$router.push({ name: 'Home' })
      }).catch((xhr, status) => {
        console.log(xhr)
      })
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
    height: 40%;
  }
</style>
