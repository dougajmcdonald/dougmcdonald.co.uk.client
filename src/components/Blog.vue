<template>
  <section class="content">
    <article v-for="post in posts">
      <h2>{{post.title}}</h2>
      <p v-html="post.content"></p>
    </article>
    <footer>
      Copyright &copy; 2017
    </footer>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import marked from 'marked'

export default {
  name: 'blog',
  computed: mapState({
    posts: state => state.blog.posts.map((post) => { return { title: post.title, content: marked(post.content) }})
  }),
  mounted () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions([
      'fetchPosts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import 'sass/variables.scss';

  @media (min-width: 48em) {
    .content {
      margin-left: 25%;
      color: $grey;
      padding-top: 2em;
      padding-right: 3em;
      padding-bottom: 0px;
      padding-left: 3em;
    }

    h2 {
      font-size: 2em;
      color: $red;
      margin-bottom: 0.2em;
      font-weight: 700;
    }

    header {
      margin: 80% 2em 0;
      text-align: right;
    }

    footer {
      padding: 1em;
      color: $grey-blue;
      text-align: center;
    }
  }

</style>
