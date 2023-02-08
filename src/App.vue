<template>
  <main class="app-container">
    <MainMenu />
    <div class="app-container">
      <RouterView />
    </div>
    <small>Created by Cody Pafford</small>
  </main>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
// TODO: add 1 hour or minus? depending on daylite savings
export default {
  components: {
    MainMenu
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
.app-container {
  width: 100vw;
  height:100vh;
}
</style>


