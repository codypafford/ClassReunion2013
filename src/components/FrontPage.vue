<template>
    <div class="container">
        <Transition name="bounce">
            <p id="title" v-if="loaded">
                Welcome Mandarin High School
            </p>
        </Transition>

        <div>
            <img src="/Mandarin_High_School_Logo.png" class="logo" alt="Mandarin logo" />
        </div>
        <div>
            <CountDown></CountDown>
        </div>
        <p>
            Hosted by Pres. Jacob Hecht and VP Christian King
        </p>
        <a id="buy-tickets-link" href="https://account.venmo.com/u/MHS2013_" target="_blank">Still need to buy tickets?</a>
        <small>Buy your tickets now at a discounted price.</small>
        <small class="footer">Created by Cody Pafford</small>
    </div>
</template>

<script>
import CountDown from './CountDown.vue';
// TODO: add 1 hour or minus? depending on daylite savings
export default {
    components: {
        CountDown,
    },
    data() {
      return {
        loaded: false
      }
    },
    mounted() {
      this.loaded = true
    },
};
</script>

<style scoped>
/* Transitions */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding-left: 5px;
    padding-right: 5px;
}

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

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 20px;
  margin-left: 15px;
}
</style>
