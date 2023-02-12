<script>
import GalleryComponent from './photos/GalleryComponent.vue';

export default {
  name: "YearbookPhotos",
  components: {
    GalleryComponent
  },
  data() {
    return {
      isMobile: true
    }
  },
  created() {
    this.isMobile = this.$isMobile()
  },
  mounted() {
  },
  methods: {
  }
}
</script>
    
<template>
    <GalleryComponent folder="Yearbook" :photoWidth="isMobile ? '100px' : '250px'" 
      :photoHeight="isMobile ? '100px' : '250px'" fileExtension=".png"></GalleryComponent>
</template>  

<style scoped>
</style>