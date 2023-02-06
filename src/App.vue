<script setup>
import CountDown from './components/CountDown.vue';
</script>

<template>
  <div class="app-container">
    <p id="title">
      Welcome Mandarin High School 
    </p>
    <div>
      <img src="./Mandarin_High_School_Logo.png" class="logo" alt="Mandarin logo" />
    </div>
    <CountDown></CountDown>
    <p>
      Hosted by Jacob Hecht and Christian King
    </p>
    <a id="buy-tickets-link" href="https://venmo.com/" target="_blank">Still need to buy tickets?</a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#buy-tickets-link:hover {
  color: rosybrown;
  cursor: pointer;
}

#title {
  font-size: 25px;
}
</style>
