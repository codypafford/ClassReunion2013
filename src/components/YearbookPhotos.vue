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
    <GalleryComponent folder="Yearbook" :numberOfPhotos="3" photoMaxWidth="300px" photoHeight="6em"></GalleryComponent>
</template>  

<style scoped>
</style>