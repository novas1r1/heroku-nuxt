<template>
  <b-card-group columns>
    <PostPreview
      v-for="post of sortedPosts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnailLink"
      :created="post.created"
    />
  </b-card-group>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loadedPosts: this.posts
    };
  },
  computed: {
    sortedPosts: function() {
      return this.posts.sort(function(a, b) {
        return new Date(b.created) - new Date(a.created);
      });
    }
  }
};
</script>
