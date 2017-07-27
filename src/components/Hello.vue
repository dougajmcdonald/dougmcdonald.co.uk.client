<template>
  <div>
    <sidebar></sidebar>
    <blog></blog>
  </div>
</template>

<script>

import Sidebar from './Sidebar.vue';
import Blog from './Blog.vue';

export default {
  name: 'hello',
  components: {
    sidebar: Sidebar,
    blog: Blog
  },
  data () {
    return {
      siteTitle: 'dougmcdonald.co.uk',
      intro: 'Code and shiz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
