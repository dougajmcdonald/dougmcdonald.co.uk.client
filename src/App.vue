<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">

  @import 'components/sass/variables.scss';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Roboto+Slab');

  body {
    font-family: 'Roboto', sans-serif;
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

</style>
