<template>
  <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="pink" dark>
            <v-toolbar-title>Userinfo</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list two-line>
            <template>
              <v-divider
                :key="index"
                :inset="true"
              ></v-divider>
              <v-list-tile
                :key="index"
              >
                <v-list-tile-content>
                  <v-list-tile-title>이름</v-list-tile-title>
                  <v-list-tile-sub-title v-html="user.name"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <template>
              <v-divider
                :inset="true"
              ></v-divider>
              <v-list-tile
              >
                <v-list-tile-content>
                  <v-list-tile-title>아이디</v-list-tile-title>
                  <v-list-tile-sub-title v-html="user.uid"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <template>
              <v-divider
                :inset="true"
              ></v-divider>
              <v-list-tile
              >
                <v-list-tile-content>
                  <v-list-tile-title>주소</v-list-tile-title>
                  <v-list-tile-sub-title v-html="user.address"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <template>
              <v-divider
                :inset="true"
              ></v-divider>
              <v-list-tile
              >
                <v-list-tile-content>
                  <v-list-tile-title>전화번호</v-list-tile-title>
                  <v-list-tile-sub-title v-html="user.phone"></v-list-tile-sub-title>
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
    this.$http.post('/api/mypage', {
      user: this.$store.state.loginfo
    })
      .then((response) => {
        this.user = response.data
      })
  },
  data: function () {
    return {
      user: []
    }
  }
}
</script>
