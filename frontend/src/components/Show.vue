<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="pink" dark>
        <v-toolbar-title>상품 상세보기</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-img :src="user.photo" height="400px" contain='true'></v-img>
      <v-list two-line>
        <template>
          <v-divider :key="index" :inset="true"></v-divider>
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-list-tile-title>상품 아이디</v-list-tile-title>
              <v-list-tile-sub-title v-html="user.sid"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <template>
          <v-divider :inset="true"></v-divider>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>이름</v-list-tile-title>
              <v-list-tile-sub-title v-html="user.name"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <template>
          <v-divider :inset="true"></v-divider>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>가격</v-list-tile-title>
              <v-list-tile-sub-title v-html="user.price"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <template>
          <v-divider :inset="true"></v-divider>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>사용기간</v-list-tile-title>
              <v-list-tile-sub-title v-html="user.time"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-btn color="success" block depressend large @click="buy">구매하기</v-btn>
      <v-btn color="info" block depressend large @click="twomethod">장바구니에 넣기</v-btn>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  created: function () {
    this.$http.post('/api/show', {
      sid: this.$route.params.sid
    })
      .then((response) => {
        this.user = response.data
      })
  },
  methods: {
    buy: function (event) {
      this.$http.post('/api/buy', {
        sid: this.$route.params.sid
      })
        .then((response) => {
          alert('구매하셨습니다!!!')
          this.$router.push('/list')
        })
    },
    basket: function () {
      this.$http.post('/api/basket', {
        sid: this.$route.params.sid,
        uid: this.$store.state.loginfo
      })
        .then((response) => {
          alert('장바구니에 넣었습니다!!!')
        })
    },
    input: function () {
      this.$http.post('/api/input', {
        sid: this.$route.params.sid
      })
        .then((response) => {
          this.$router.push('/')
        })
    },
    twomethod: function (event) {
      this.input()
      this.basket()
    }
  },
  data: function () {
    return {
      user: {}
    }
  }
}
</script>
