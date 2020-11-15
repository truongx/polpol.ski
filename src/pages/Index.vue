<template>
  <Layout :show-logo="false">
    <h1><QText :options="['polpol.ski', 'półpol.ski']" :min-delay="100" :max-delay="3000" /></h1>
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D.MM.YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import QText from '~/components/QText.vue'

export default {
  components: {
    PostCard,
    QText
  },
  metaInfo: {
    title: 'polpol.ski'
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
  width: 100%;
}
</style>
