<template>
    <div class="photo-container" v-if="loaded">
        <div class="photo-wrap" v-for="photo in photos" :key="photo">
            <img :src="`/${folder}/${photo}`" alt="Image" :style="{ maxWidth: photoMaxWidth, height: photoHeight }">
        </div>
    </div>
</template>

<script>
export default {
    name: "GalleryComponent",
    props: {
        folder: {
            type: String,
            required: true
        },
        numberOfPhotos: {
            type: Number,
            required: true
        },
        photoMaxWidth: {
            type: String,
            required: true
        },
        photoHeight: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            photos: [],
            loaded: false
        };
    },
    mounted() {
        this.createPhotosArray()
        this.loaded = true
    },
    methods: {
        createPhotosArray() {
            for (let num = 0; num < this.numberOfPhotos; num++) {
                this.photos.push(this.folder + '_photo_' + num + '.png')
            }
        }
    }
};
</script>

<style>
.photo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo-wrap {
    margin: 10px;
}

img {
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

img:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
