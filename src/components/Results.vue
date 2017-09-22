<template>
  <div id="results">
    <div v-if="showResults">
      <div class="content">
        <h2 class="content-head is-center">Results for {{resultsBBL}}</h2>
          <div class="pure-g">
            <links :links = "links" ></links>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityLinks from './Citylinks'
import {store} from '../store/store'
export default {
  name: 'results',
  components: {
    'links': cityLinks
  },
  store: store,
  data () {
    return {
    }
  },
  computed: {
    links () {
      return this.$store.getters.getLinks
    },
    resultsBBL () {
      return this.$store.getters.resultsBBL
    },
    showResults () {
      return this.$store.getters.showResults
    }
  }
}
</script>

<style>
</style>