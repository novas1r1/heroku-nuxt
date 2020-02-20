<template>
  <div>
    <section class="intro">
      <h1>surf&#39;n&#39;work</h1>
      <h2>Bye bye winter</h2>
    </section>
    <b-container>
      <section class="overview">
        <h1>Hallo und willkommen zu unserem kleinen Abenteuer</h1>
        <p>
          Hier könnt ihr ein bisschen über unsere aktuelle Remote-Working-Tour
          erfahren. Im Zuge einer Einarbeitung für eine Technologie ist diese
          Webseite entstanden. Sie ist nicht super-special, sollte aber
          weitestgehend funktionieren. Falls nicht - einfach kurz Bescheid geben
          :)!
        </p>

        <h2>Letzte Beiträge</h2>

        <PostList :posts="loadedPosts" v-if="loadedPosts.length > 0" />
        <p class="empty" v-else>
          Leider waren wir bisher zu faul Beiträge zu schreiben =(! Schaut
          morgen nochmal vorbei?!
        </p>
      </section>
    </b-container>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  background-image: url('~assets/images/surfing_bg.jpg');
  background-position: center;
  background-size: cover;
  height: 375px;
  background-position: 0% 72%;
}

.intro h1 {
  margin-right: 20px;
  font-weight: 500;
  color: #ffffff;
  font-size: 10em;
  text-align: right;
  line-height: 1.1em;
}

.intro h2 {
  padding: 10px 20px;
  text-align: right;
  font-size: 4em;
  background-color: rgba(255, 255, 255, 0.4);
}

.overview {
  padding-top: 40px;
}

.empty {
  font-style: italic;
}
</style>
