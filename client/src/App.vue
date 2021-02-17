<template>
  <div id="app">
    <router-view :setCurrentUser="setCurrentUser"></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      currentUser: {
        id: '',
        email: ''
      }
    }
  },
  methods: {
    setCurrentUser (id, email) {
      this.currentUser.id = id
      this.currentUser.email = email
    }
  }
  // created: {

  // }
}
</script>

<style>
</style>
