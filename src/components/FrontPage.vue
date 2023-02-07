<template>
    <div class="container">
        <p id="title">
            Welcome Mandarin High School
        </p>
        <div>
            <img src="/Mandarin_High_School_Logo.png" class="logo" alt="Mandarin logo" />
        </div>
        <div>
            <CountDown></CountDown>
        </div>
        <p>
            Hosted by President Jacob Hecht and VP Christian King
        </p>
        <a id="buy-tickets-link" href="https://venmo.com/" target="_blank">Still need to buy tickets?</a>
        <small>Buy your tickets now at a discounted price.</small>
    </div>
</template>

<script>
import CountDown from './CountDown.vue';
// TODO: add 1 hour or minus? depending on daylite savings
export default {
    components: {
        CountDown
    },
};
</script>

<style scoped>
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
</style>
