<template>
  <div class="error-page">
    <h1>
      Upsi, die Webseite macht Mittagschlaf. Bitte später nochmal probieren!
    </h1>
    <p>Zurück <a href="/">nach Hause</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
