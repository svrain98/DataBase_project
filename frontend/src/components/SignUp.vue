<template>
<div id="signUp">
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원가입</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="user.name" label="Name"></v-text-field>
            <v-text-field v-model="user.uid" label="ID"></v-text-field>
            <v-text-field v-model="user.password" type="password" label="Password"></v-text-field>
            <v-text-field v-model="user.phone" label="Phone"></v-text-field>
            <v-text-field v-model="user.address" label="Address"></v-text-field>
            <v-btn color="primary" block depressend large @click="signUp">
              SignUp
            </v-btn>
            <v-btn color="success" router :to="{name: 'home'}">Home</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        uid: '',
        password: '',
        name: '',
        phone: '',
        address: ''
      }
    }
  },
  methods: {
    signUp: function (event) {
      this.$http.post('/api/signUp', {
        user: this.user
      })
        .then((response) => {
          if (response.data.result === 0) {
            alert('Error, please, try again')
          }
          if (response.data.result === 1) {
            alert('Success')
            this.$router.push('/login') // Login 페이지로 보내줌
          }
        })
        .catch(function (error) {
          if (error) {
            alert('error1')
          }
        })
    }
  }
}
</script>

<style lang="css">
</style>
