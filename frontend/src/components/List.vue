<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="pink" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>상품목록</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list two-line>
        <template v-for="good in goods">
          <v-list-tile :key="good.sid" avatar>
            <v-list-tile-avatar>
              <img :src="good.photo">
            </v-list-tile-avatar>
            <router-link :to="{ name: 'show', params: { sid: good.sid} }">상세보기</router-link>
            <v-list-tile-content>
              <v-list-tile-title v-html="good.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="good.price"></v-list-tile-sub-title>
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
    this.$http.post('/api/list')
      .then((response) => {
        this.goods = response.data
      })
  },
  data: function () {
    return {
      goods: []
    }
  }
}
</script>
