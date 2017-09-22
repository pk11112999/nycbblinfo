<template>
	<div id="bottom">
		<div class="bottom l-box is-center">
		    Please be aware this is a work in progress. :) An <a href="https://github.com/pk11112999/nycbblinfo">open source</a>, <a href="https://opendata.cityofnewyork.us/">open data</a> project. 
		    <p><small>NOT A CITY-SPONSORED SITE. DATA ACCURACY NOT GUARANTEED.</small></p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<style>
/* This is the class used for the footer */
.bottom {
    background: #111;
    position: block;
    bottom: 0;
    width: 100%;
}

/*
 * -- LAYOUT STYLES --
 * These are some useful classes which I will need
 */
.l-box {
    padding: 1em;
}

.l-box-lrg {
    padding: 2em;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

.is-center {
    text-align: center;
}

@media (min-width: 48em) {

    /* We remove the border-separator assigned to .l-box-lrg */
    .l-box-lrg {
        border: none;
    }

}
</style>