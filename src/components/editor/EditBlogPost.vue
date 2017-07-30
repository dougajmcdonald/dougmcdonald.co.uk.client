<template>
  <section class="content">
    <vue-editor class="md-editor" ng-model="value"></vue-editor>
  </section>
</template>

<script>

export default {
  name: 'edit-blog-post',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import '../sass/variables.scss';

  .content {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    min-height: 500px;
    position: absolute;

   .md-editor {
      background-color: $grey;

   }
  }


</style>
