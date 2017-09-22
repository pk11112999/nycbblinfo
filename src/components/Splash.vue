<template>
	<div class="splash-container">
        <div class="splash">
            <h1 class="splash-head" style="color:black"><code>NYC BBL INFO</code></h1>
            <p class="splash-subhead">
                {{ subhead }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'splash',
  data () {
    return {
      subhead: 'new york city borough block and lot information'
    }
  }
}
</script>

<style>
/*
 * -- SPLASH STYLES --
 * This is the blue top section that appears on the page.
 */


.splash-container {
    background-image: url("/static/images/splash_img.JPG");
    z-index: 1;
    overflow: hidden;
    /* The following styles are required for the "scroll-over" effect */
    width: 100%;
    height: 88%;
    top: 0;
    left: 0;
    position: fixed !important;
}

.splash {
    /* absolute center .splash within .splash-container */
    width: 80%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 100px; left: 0; bottom: 0; right: 0;
    text-align: center;
    text-transform: uppercase;
}

/* This is the main heading that appears on the blue section */
.splash-head {
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 3px solid white;
    padding: 1em 1.6em;
    font-weight: 100;
    border-radius: 5px;
    line-height: 1em;
}

/* This is the subheading that appears on the blue section */
.splash-subhead {
    color: grey;
    letter-spacing: 0.05em;
    opacity: 0.8;
}
@media (min-width: 48em) {
    /* We increase the height of the splash-container */
/*    .splash-container {
        height: 500px;
    }*/

    /* We decrease the width of the .splash, since we have more width
    to work with */
    .splash {
        width: 50%;
        height: 50%;
    }

    .splash-head {
        font-size: 250%;
    }
}
@media (min-width: 78em) {
    /* We increase the header font size even more */
    .splash-head {
        font-size: 300%;
    }
}
</style>