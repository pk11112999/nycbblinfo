<template>
  <div id="search">
    <splash></splash>
    
    <div class="content-wrapper">
        <query></query>
        <results></results>                
        <bottom></bottom>
    </div>
  </div>
</template>

<script>
import Splash from './Splash'
import Bottom from './Bottom'
import Query from './Query'
import Results from './Results'
export default {
  name: 'search',
  components: {
    'splash': Splash,
    'bottom': Bottom,
    'query': Query,
    'results': Results
  },
  data () {
    return {
    }
  },
  events: {
    'userQuery': function (bbl) {
      this.outputBBL = bbl
      console.log('hello')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*
 * -- CONTENT STYLES --
 * This represents the content area (everything below the blue section)
 */
.content-wrapper {
    /* These styles are required for the "scroll-over" effect */
    position: absolute;
    top: 87%;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;

}

/* We want to give the content area some more padding */
.content {
    padding: 1em 1em 3em;
}

/* This is the class used for the main content headers (<h2>) */
.content-head {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 2em 0 1em;
}

/* This is a modifier class used when the content-head is inside a ribbon */
.content-head-ribbon {
    color: white;
}

/* This is the class used for the content sub-headers (<h3>) */
.content-subhead {
    color: #1f8dd6;
}
    .content-subhead i {
        margin-right: 7px;
    }

/* This is the class used for the dark-background areas. */
.ribbon {
    background: #2d3e50;
    color: #aaa;
}


</style>
