<template>
<div id="login">
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="user.uid" label="ID"></v-text-field>
            <v-text-field v-model="user.password" type="password" label="Password">
            </v-text-field>
            <v-btn color="primary" block depressend large @click="login">
              Login
            </v-btn>
            <v-btn color="success" router :to="{name: 'signUp'}">SignUp</v-btn>
          </div>
        </v-card>
        <v-alert class="mb-3" :value="this.$store.state.isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-alert class="mb-3" :value="this.$store.state.isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
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
        name: ''
      },
      url: {
        signUpUrl: '/signUp'
      }
    }
  },
  methods: {
    login: function (event) {
      this.$http.post('/api/login', {
        user: this.user
      })
        .then(
          (response) => {
            alert('success login')
            this.$store.dispatch('login', response.data.uid)
          }
        )
        .catch(function (error) {
          if (error) {
            this.$store.state.isLoginError = true
          }
        })
    }
  }
}
</script>
