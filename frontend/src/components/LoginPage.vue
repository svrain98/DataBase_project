<template lang="html">
  <div>
    <h1>로그인 페이지입니다.</h1>
      <h2>Log In</h2>
      <form @submit="onSubmit">
          <input placeholder="Enter your ID" v-model="uid">
          <input placeholder="Enter your password" v-model="password">
          <button type="submit">Login</button>
          <div class="alert-danger" v-if="errorState">
            <p></p>
          </div>
      </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Login',
  data: () => ({
    uid: '',
    password: ''
  }),
  methods: {
    ...mapActions(['login']),
    async onSubmit () {
      try {
        let loginResult = await this.login({uid: this.uid, password: this.password})
        if (loginResult) this.goToPages()
      } catch (err) {
        console.error(err)
      }
    },
    goToPages () {
      this.$router.push({
        name: 'IndexPage'
      })
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState' // getter로 errorState를 받는다
    })
  }
}
</script>

<style lang="css">
</style>
