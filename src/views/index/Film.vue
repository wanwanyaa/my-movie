<template>
  <div class="my films">
    电影
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('film', [
      'getOneFilmList',
      'getNextFilmList'
    ])
  },
  created () {
    this.getNextFilmList()
  }
}
</script>

