<template>
  <section class="content">
    <article>
      <h2>Post title 1</h2>
      <p>I'm Doug and this is my personal website with thoughts and experiences on code and shiz. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lorem et commodo sollicitudin. Donec viverra mattis dolor. Fusce eu tincidunt ex. Mauris id orci volutpat, ultrices ligula porttitor, hendrerit odio. </p>
      <p>Sed quis ligula porta, posuere nibh et, lobortis leo. Curabitur eros justo, molestie id sapien eu, molestie tempor sem. Vestibulum pretium laoreet scelerisque. Praesent eget purus facilisis, posuere mauris vitae, bibendum mauris. Sed rhoncus, elit in tempor pulvinar.</p>
    </article>
    <article>
      <h2>Post title 2</h2>
      <p>Sed quis ligula porta, posuere nibh et, lobortis leo. Curabitur eros justo, molestie id sapien eu, molestie tempor sem. Vestibulum pretium laoreet scelerisque. Praesent eget purus facilisis, posuere mauris vitae, bibendum mauris. Sed rhoncus, elit in tempor pulvinar.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lorem et commodo sollicitudin. Donec viverra mattis dolor. Fusce eu tincidunt ex. Mauris id orci volutpat, ultrices ligula porttitor, hendrerit odio. </p>
      <p>Sed quis ligula porta, posuere nibh et, lobortis leo. Curabitur eros justo, molestie id sapien eu, molestie tempor sem. Vestibulum pretium laoreet scelerisque. Praesent eget purus facilisis, posuere mauris vitae, bibendum mauris. Sed rhoncus, elit in tempor pulvinar.</p>
      <p>Sed quis ligula porta, posuere nibh et, lobortis leo. Curabitur eros justo, molestie id sapien eu, molestie tempor sem. Vestibulum pretium laoreet scelerisque. Praesent eget purus facilisis, posuere mauris vitae, bibendum mauris. Sed rhoncus, elit in tempor pulvinar.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lorem et commodo sollicitudin. Donec viverra mattis dolor. Fusce eu tincidunt ex. Mauris id orci volutpat, ultrices ligula porttitor, hendrerit odio. </p>
    </article>
    <footer>
      Copyright &copy; 2017
    </footer>
  </section>
</template>

<script>

export default {
  name: 'blog',
  data () {
    return {
    }
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
