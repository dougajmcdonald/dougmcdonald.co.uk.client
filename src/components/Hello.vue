<template>
  <div>
    <section class="header-banner">
      <div class="stripe-grid blue">
        <div class="stripe zero"></div>
        <div class="stripe first"></div>
        <div class="stripe second"></div>
        <div class="stripe third"></div>
        <div class="stripe fourth"></div>
      </div>
      <div class="content-wrap row cf">
          <section class="content">
            <h1 class="hero-title"><span>{{siteTitle}}</span></h1>
            <p class="hero-subtitle">
              {{intro}}
            </p>
            <div class="button-group">
              <a href="#">
                <div class="button primary-button">Read my mind</div>
              </a>
              <a href="#">
                <div class="button secondary-button">Shout at me</div>
              </a>
            </div>
          </section>
            <!--  https://beyond.dev.elevate360.com.au/wp-content/uploads/2017/02/brain.png -->
          <section class="image"><img src="https://image.ibb.co/b598MQ/Git_Icon_White.png"></section>
      </div>
    </section>
    <section class="main-content row">
      <h2>Hi there!</h2>
      <p>I'm Doug and this is my personal website with thoughts and experiences on code and shiz. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere lorem et commodo sollicitudin. Donec viverra mattis dolor. Fusce eu tincidunt ex. Mauris id orci volutpat, ultrices ligula porttitor, hendrerit odio. </p>
      <p>Sed quis ligula porta, posuere nibh et, lobortis leo. Curabitur eros justo, molestie id sapien eu, molestie tempor sem. Vestibulum pretium laoreet scelerisque. Praesent eget purus facilisis, posuere mauris vitae, bibendum mauris. Sed rhoncus, elit in tempor pulvinar.</p>
    </section>
    <section class="footer">
      <div class="row">
        <p>Copyright </p>
      </div>
    </section>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'hello',
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
