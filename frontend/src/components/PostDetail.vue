<template>
  <v-container class="blue lighten-5" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10">
        <h1>{{ post.title }}</h1>
        <p>{{ post.update_dt }}, written by {{ post.owner }}</p>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <p style="white-space: pre-wrap;">
            {{ post.content }}
          </p>
          <div>
            <strong>TAGS:</strong>

            <v-chip
              class="ma-2"
              color="indigo darken-3"
              outlined
              v-for="(tag, index) in post.tags"
              :key="index"
            >
              <v-icon left>mdi-fire</v-icon>
              {{ tag }}
            </v-chip>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" lg="3">
        <v-card class="pa-2 mb-5" tile>
          <p>Prev post</p>
          <h2
            v-if="post.prev"
            @click="fetchPostDetail(post.prev.id)"
            class="my-hover"
          >
            {{ post.prev.title }}
          </h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <p>Next post</p>
          <h2
            v-if="post.next"
            @click="fetchPostDetail(post.next.id)"
            class="my-hover"
          >
            {{ post.next.title }}
          </h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <h2>Tags cloud</h2>
          <v-chip class="ma-2" color="green" text-color="white">
            <v-avatar left class="green darken-4">1</v-avatar>
            python
          </v-chip>
          <v-chip class="ma-2" color="green" text-color="white">
            <v-avatar left class="green darken-4">2</v-avatar>
            django
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',

  data: () => ({
    post: {},
  }),

  created() {
    console.log('created()...')
    const postId = 2
    this.fetchPostDetail(postId)
  },

  methods: {
    fetchPostDetail(postId) {
      console.log('fetchPostDetail()...', postId)
      axios
        .get(`/api/post/${postId}/`)
        .then((res) => {
          console.log('POST DETAIL GET RES', res)
          this.post = res.data
        })
        .catch((err) => {
          console.log('POST DETAIL GET ERR.RESPONE', err.response)
          alert(err.response.status + ' ' + err.response.statusText)
        })
    },
  },
}
</script>

<style scoped>
.my-hover:hover {
  cursor: pointer;
  font-style: italic;
}
</style>
