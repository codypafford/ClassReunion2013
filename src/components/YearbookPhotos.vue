<script>
import GalleryComponent from './photos/GalleryComponent.vue';

export default {
  name: "YearbookPhotos",
  components: {
    GalleryComponent
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
    
<template>
    <GalleryComponent folder="Yearbook" photoMaxWidth="300px" photoHeight="6em"></GalleryComponent>
</template>  

<style scoped>
</style>