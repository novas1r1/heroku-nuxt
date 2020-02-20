<template>
  <div class="container posts-page">
    <h1>Beiträge</h1>
    <PostList :posts="loadedPosts" v-if="loadedPosts.length > 0" />
    <p class="empty" v-else>
      Leider waren wir bisher zu faul Beiträge zu schreiben =(! Schaut morgen
      nochmal vorbei?
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>
.posts-page {
}
</style>
