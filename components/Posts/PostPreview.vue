<template>
  <b-card
    :title="title"
    :img-src="thumbnail"
    :footer="created | date"
    footer-border-variant="secondary"
    border-variant="secondary"
    img-alt="Image"
    img-top
    tag="article"
    class="lg-4 mb-3 sm-1"
  >
    <b-card-text>
      {{ previewText }}
    </b-card-text>

    <!--        <b-button href="#" block variant="primary">-->
    <b-link :to="postLink" block variant="primary">
      Mehr lesen
    </b-link>
    <!--        </b-button>-->
  </b-card>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    created: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
    }
  }
};
</script>

<style scoped></style>
