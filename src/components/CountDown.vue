<template>
    <div v-if="loaded" class="countdown-container">
      <div>T-minus</div>
      <p>{{ days }} days {{ hours }} hours {{ minutes }} minutes {{ seconds }} seconds</p>
      <div>until 2013 Class Reunion</div>
    </div>
  </template>
  
  <script>
  // TODO: add 1 hour or minus? depending on daylite savings
  export default {
    data() {
      return {
        countdown: null,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        loaded: false
      };
    },
    mounted() {
      this.countdown = setInterval(() => {
        let now = new Date();
        let targetDate = new Date("May 20, 2023 19:00:00");
        let difference = targetDate - now;
        if (difference <= 0) {
          clearInterval(this.countdown);
        } else {
          this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
        }
        this.loaded = true
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.countdown);
    },
  };
  </script>

  
<style scoped>
p {
    font-weight: bold;
    color: #f1592a;
    font-size: 18px;
}

div {
  color: grey
}

.countdown-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
</style>

  