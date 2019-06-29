<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="pink" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>내 장바구니</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list two-line>
        <template v-for="thing in bags">
          <v-list-tile :key="thing.sid" avatar>
            <v-list-tile-avatar>
              <img :src="thing.photo">
            </v-list-tile-avatar>
            <router-link :to="{ name: 'show', params: { sid: thing.sid} }">상세보기</router-link>
            <v-list-tile-content>
              <v-list-tile-title v-html="thing.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="thing.price"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
export default {
  created: function () {
    this.$http.post('/api/mybag', {
      uid: this.$store.state.loginfo
    })
      .then((response) => {
        this.bags = response.data
      })
  },
  data: function () {
    return {
      bags: []
    }
  }
}
</script>
