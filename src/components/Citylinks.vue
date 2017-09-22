<template>
  <div id="Citylinks">
    <div v-for="link in cityLinks" class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-5">
      <h3 class="content-subhead is-center">
          {{link.heading}}

      </h3>
      <p>
        <a class="pure-button pure-button-primary" v-bind:href="link.url" target="_blank"> <img v-bind:src="link.thumb" class="pure-img-responsive"/> </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Citylinks',
  props: ['links'],
  data () {
    return {
      'cityLinks': this.links
    }
  }
}
</script>

<style>
</style>
