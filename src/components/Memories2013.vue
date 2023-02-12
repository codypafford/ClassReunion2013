<script>
import GalleryComponent from './photos/GalleryComponent.vue';

export default {
  name: "Memories2013",
  components: {
    GalleryComponent
  },
  data() {
    return {
      isMobile: true
    }
  },
  mounted() {
  },
  created() {
    this.isMobile = this.$isMobile()
  },
  methods: {
  }
}
</script>
    
<template>
  <GalleryComponent folder="2013Memories" :photoWidth="isMobile ? '120px' : '360px'" 
    :photoHeight="isMobile ? '100px' : '300px'" fileExtension=".jpeg"></GalleryComponent>
</template>  

<style scoped>
</style>