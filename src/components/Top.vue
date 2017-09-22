<template>
	<div id="top">
	  <div class="header home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
	    <a class="pure-menu-heading" href="">NYC BBL INFO</a>
	    <ul class="pure-menu-list">
	        <li class="pure-menu-item"><a href="#home" class="pure-menu-link">Home</a></li>
	        <li class="pure-menu-item"><a href="#convertBBL" class="pure-menu-link">Search</a></li>
	    </ul>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style>
/*
 * -- MENU STYLES --
 * I want to customize how my .pure-menu looks at the top of the page
 */

.home-menu {
    padding: 0.5em;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.10);
}
.home-menu {
    background: #000000;
}
.pure-menu.pure-menu-fixed {
    /* Fixed menus normally have a border at the bottom. */
    border-bottom: none;
    /* I need a higher z-index here because of the scroll-over effect. */
    z-index: 4;
}

.home-menu .pure-menu-heading {
    color: white;
    font-weight: 400;
    font-size: 120%;
}

.home-menu .pure-menu-selected a {
    color: white;
}

.home-menu a {
    color: #6FBEF3;
}
.home-menu li a:hover,
.home-menu li a:focus {
    background: none;
    border: none;
    color: #AECFE5;
}
/*
 * -- TABLET (AND UP) MEDIA QUERIES --
 * On tablets and other medium-sized devices, we want to customize some
 * of the mobile styles.
 */
 @media (min-width: 48em) {

    /* We can align the menu header to the left, but float the
    menu items to the right. */
    .home-menu {
        text-align: left;
    }
        .home-menu ul {
            float: right;
        }
}
</style>