<template>
  <div>
    <LoginForm :setCurrentUser="setCurrentUser"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/LoginForm.vue'

export default {
  props: ['setCurrentUser'],
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>
