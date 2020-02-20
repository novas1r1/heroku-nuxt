<template>
  <div class="container post-detail-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>

      <div class="post-details">
        <div v-html="loadedPost.content"></div>
      </div>

      <div class="post-infos">
        <img
          src="~/assets/images/verry.png"
          v-if="loadedPost.author == 'Verry'"
          width="50px"
          height="50px"
        />
        <img
          src="~/assets/images/matthias.png"
          v-else
          width="50px"
          height="50px"
        />
        <span
          >Geschrieben am {{ loadedPost.created | date }} von
          {{ loadedPost.author }}</span
        >
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    return axios
      .get(
        'https://surfnwork-blog.firebaseio.com/posts/' +
          context.params.id +
          '.json'
      )
      .then(res => {
        return { loadedPost: res.data };
      })
      .catch(error => context.error(error));
  }
};
</script>

<style lang="scss">
$background-color: hsl(50, 5, 97);
$black: hsl(200, 40, 10);
$white: $background-color;
$base-line-height: 1.5em;

.post-details p {
  margin-bottom: 0;
}

.post-infos {
  display: inline-block;
  padding: 10px 0;
  width: 100%;
  border-top: 1px dashed #023b51;
  margin-top: 20px;
}

.post-infos span {
  font-size: 10pt;
}

blockquote {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid lighten($black, 40%);
  font-family: 'poynter-gothic-text', serif;
  font-size: 2em;
  line-height: $base-line-height;
  font-weight: 100;
  &:before,
  &:after {
    content: '\201C';
    font-family: 'Sanchez';
    color: lighten($black, 40%);
  }
  &:after {
    content: '\201D';
  }
}
</style>
