<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="My title"
      previewText="my text under here"
      thumbnail="http://lorempixel.com/640/480/technics"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="My second title"
      previewText="my second text under here"
      thumbnail="http://lorempixel.com/640/480/technics"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="My third title"
      previewText="my third text under here"
      thumbnail="http://lorempixel.com/640/480/technics"
    />
  </section>
</template>
<script>
import PostPreview from '~/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

