<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs" fill-height>
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 class="pb-2" v-for="index in publics" :key="index.sid">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text" v-html="index.name"></div>
                    <h3 class="headline" v-html="index.cnt"></h3>
                    <h3>/10</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <img :src="index.photo">
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created: function () {
    this.$http.post('/api/public')
      .then((response) => {
        this.publics = response.data
      })
  },
  data: function () {
    return {
      publics: []
    }
  }
}
</script>
