<script>
export default {
  name: "MainMenu",
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    switchDataShown(value) {
      this.$router.push({ name: value.toLowerCase() });
    }
  }
}
</script>
    
<template>
  <div id="header">
    <div :class="'home' === this.$route.name ? 'active-header-tiles' : 'header-tiles'" @click="switchDataShown('home')">Home</div>
    <div :class="'about' === this.$route.name ? 'active-header-tiles' : 'header-tiles'" @click="switchDataShown('about')">More Info</div>
    <div :class="'yearbook' === this.$route.name ? 'active-header-tiles' : 'header-tiles'" @click="switchDataShown('yearbook')">Yearbook Photos</div>
    <div v-if="false" :class="'memories2013' === this.$route.name ? 'active-header-tiles' : 'header-tiles'" @click="switchDataShown('memories2013')">2013 Memories</div>
    <div v-if="false" :class="'inlovingmemory' === this.$route.name ? 'active-header-tiles' : 'header-tiles'" @click="switchDataShown('inlovingmemory')">In Loving Memory</div>
  </div>
</template>  

<style scoped>
#header {
  position: relative;
  height: 70px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: whitesmoke;
  color: black;
  font-size: 15px;
  align-items: center;
}

.header-tiles {
  position: relative;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
}

.active-header-tiles {
  position: relative;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  color: darkgray;
  text-decoration: underline black 1px; 
  text-underline-offset: 2px;
}

.header-tiles:hover {
  color: #d6dee1;
}
</style>