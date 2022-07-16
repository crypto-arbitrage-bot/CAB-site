<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
<div id="content">
  <NavBar active="Home"></NavBar>

  <RouterView></RouterView>
</div>

</template>

<style>
@import '@/assets/base.css';

#app {
  /* max-width: 1280px; */
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  /* margin: 0 auto;
  padding: 2rem; */
  background-image: url("@/assets/bg.jpg");
  background-position: center;
  background-size: cover;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  text-decoration: none;
  color: #FFFFFF;
  transition: 0.4s;
}

/* a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
} */

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}


</style>

<script>
export default {
  components: {
    NavBar
  }
}
</script>
