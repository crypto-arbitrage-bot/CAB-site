<template>
  <div class="install">
    <div class="text-content">
      <h1>Install Instructions</h1>

      <h1>Install instructions here, video to the right.</h1>

      <v-btn
        color="primary" 
        text="secondary"
        elevation="24"
        class="install-button"
      >
      <a href="https://github.com/crypto-arbitrage-bot/CAB/releases">
        Download
      </a>
      </v-btn>
    </div>
    <div class="video-content">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/p9nkDAKQxrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.install {
  width: fit-content;
  margin: 7.5% auto 0;
  display: flex;
}

.install > div {
  margin: 5px;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.install-button {
  margin: auto auto;
  align-self: flex-end;
}

</style>