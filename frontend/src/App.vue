<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div id="content">
    <NavBar></NavBar>

    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import '@/assets/base.css';

#app {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/bg.jpg');
  background-position: center;
  background-size: cover;
  font-weight: normal;
  overflow: hidden;
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
  color: #ffffff;
  transition: 0.4s;
}

a {
  box-sizing: border-box;
  padding: 5px;
}

@media (hover: hover) {
  a:hover {
    border-radius: 15px;
    /* background-color: hsla(160, 100%, 37%, 0.2); */
    background-color: #b3bd5877;
  }
}
</style>
