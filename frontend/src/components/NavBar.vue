<template>
  <nav id="nav">
    <RouterLink
      to="/"
      :class="{ active: isActive('home') }"
      @click="makeActive('home')"
      ><img id="logo" ref="Home" src="@/assets/logo.png" alt="CAB logo"
    /></RouterLink>
    <ul id="links">
      <li ref="About" :class="{ active: isActive('about') }">
        <h1>
          <RouterLink to="/about" @click="makeActive('about')"
            >About</RouterLink
          >
        </h1>
      </li>
      <li ref="Install" :class="{ active: isActive('install') }">
        <h1>
          <RouterLink to="/install" @click="makeActive('install')"
            >Install</RouterLink
          >
        </h1>
      </li>
      <li ref="Contact" :class="{ active: isActive('contact') }">
        <h1>
          <RouterLink to="/contact" @click="makeActive('contact')"
            >Contact</RouterLink
          >
        </h1>
      </li>
      <li ref="GitHub">
        <h1><a href="https://github.com/crypto-arbitrage-bot">GitHub</a></h1>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    };
  },
  watch: {
    $route: 'update',
  },
  methods: {
    makeActive(item) {
      this.active = item;
    },
    isActive(name) {
      return this.active == name;
    },
    debug(item) {
      console.log(this.isActive(item));
    },
    update(route) {
      console.log(route);
      this.makeActive(route.name);
    },
  },
};
</script>

<style scoped>
.active * {
  color: #f9f871;
}

#links li {
  padding-right: 20px;
}

#nav ul {
  list-style: none;
  padding-right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

#nav {
  position: relative;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
