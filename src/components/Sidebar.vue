<template>
  <section class="sidebar">
    <header>
      <h1>{{siteTitle}}</h1>
      <h2>{{intro}}</h2>
      <button class="primary-button">READ MY MIND</button>
      <button class="secondary-button">SHOUT AT ME</button>
    </header>
  </section>
</template>

<script>

export default {
  name: 'sidebar',
  data () {
    return {
      siteTitle: 'Doug McDonald',
      intro: 'Code and shiz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import 'sass/variables.scss';

  @media (min-width: 48em) {
    .sidebar {
      position: fixed;
      width: 25%;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: $grey;
    }

    header {
      margin: 80% 2em 0;
      text-align: right;
    }

    h1 {
      font-family: 'Roboto slab';
      color: #fff;
      font-size: 2em;
      margin: 0;
    }

    h2 {
      color: $grey-blue;
      font-weight: normal;
    }

    button {
      border: 2px solid #fff;
      color: $grey-blue;
      padding: 1em 1em;
      margin-left: 1em;
      font-size: 0.7em;
      font-weight: bold;
      background: transparent;
      border-radius: 2px;
    }

    button:hover {
      cursor: pointer;
      background: #fff;
    }
  }

</style>
