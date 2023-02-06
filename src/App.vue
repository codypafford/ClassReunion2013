<template>
  <main>
    <MainMenu />
    <div class="app-container">
      <RouterView />
    </div>
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
  margin-top: 20px;
}
</style>


