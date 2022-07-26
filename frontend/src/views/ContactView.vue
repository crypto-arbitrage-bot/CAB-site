<template>
  <div class="contact">
    <h1 class="center">Contact us!</h1>
    <div id="email-box">
      <h2>Send us an email</h2>
      <input id="name" placeholder="Full name" />
      <input id="email" placeholder="Email address" />
      <input id="subject" placeholder="Subject" />
      <label for="message">Message body</label>
      <v-textarea id="message"></v-textarea>

      <v-btn>Send Email</v-btn>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
}
.center {
  margin: 0 auto;
}
.contact {
  display: flex;
  margin: 0 auto;
  width: fit-content;
  flex-direction: column;
}

#email-box {
  display: flex;
  flex-direction: column;
  border: 3px solid rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  box-sizing: border-box;
  padding: 5%;
  width: max-content;
  margin: 0 auto;
}

#name,
#email,
#subject,
#message {
  width: 25vw;
  /* padding-top: 5%; */
  margin-top: 5px;
  background: rgba(217, 217, 217, 0.25);
  border-radius: 6px;
  box-sizing: border-box;
  padding: 5px;
}
</style>
