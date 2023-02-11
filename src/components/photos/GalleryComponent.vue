<template>
    <div>
        <span id="page-number">Page {{ pageNumber }}</span>
        <div class="photo-container" v-if="loaded">
            <div class="photo-wrap" v-for="photo in photos" :key="photo">
                <img :src="photo" alt="Image" @click="toggleFullscreen(photo)" :style="{ width: photoWidth, height: photoHeight }">
            </div>
            <div class="btn-container">
                <button class="prev-btn" @click="prevPage">Previous</button>
                <button class="next-btn" @click="nextPage">Next</button>
            </div>
        </div>
        <div class="fullscreen" v-if="fullscreenPhoto">
            <img :src="fullscreenPhoto" alt="Fullscreen Image">
            <button class="close-btn" @click="closeFullscreen">Exit</button>
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
        photoWidth: {
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
            loaded: false,
            pageNumber: 1,
            numberPerPage: 6,
            fullscreenPhoto: ''
        };
    },
    mounted() {
        this.createPhotosArray()
        this.loaded = true
    },
    methods: {
        toggleFullscreen(photo) {
            this.fullscreenPhoto = this.fullscreenPhoto === photo ? '' : photo;
        },
        closeFullscreen() {
            this.fullscreenPhoto = '';
        },
        async createPhotosArray() {
            this.photos = []

            let photoExists = true;
            let index
            if (this.pageNumber === 1) {
                index = 1
            } else {
                index = (((this.pageNumber - 1) * this.numberPerPage) + 1)
            }
            let count = 0
            while (photoExists && count < this.numberPerPage) {
                let imgUrl = new URL(`../../assets/${this.folder}/${this.folder}_photo_${index}.png`, import.meta.url).href
                if (imgUrl.includes('undefined')) {
                    photoExists = false
                } else {
                    this.photos.push(imgUrl)
                    index++
                    count++
                }
            }
            if (this.photos.length === 0 && this.pageNumber > 1) {
                this.pageNumber = this.pageNumber - 1
                this.createPhotosArray()
            }
        },
        nextPage() {
            this.pageNumber = this.pageNumber + 1
            this.createPhotosArray()
        },
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber = this.pageNumber - 1
                this.createPhotosArray()
            } else {
                console.log('cant decrement')
            }
        }
    }
};
</script>

<style>
.btn-container {
    width: 100%;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.prev-btn,
.next-btn {
    color: white;
    background: #f1592a;
    margin: 5px;
    padding: 10px;
    min-width: 100px;
}

.prev-btn:hover,
.next-btn:hover {
    color: black;
    background: white;
}

.photo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.photo-wrap {
    margin: 7px;
}

img {
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    background-color: grey;
    border-radius: 20px;
}

img:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

#page-number {
    margin-left: 10px;
}

.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
}

.fullscreen img {
    max-width: 80%;
    max-height: 80%;
}

.close-btn {
    position: absolute;
    top: 35px;
    right: 35px;
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    font-size: 1.5em;
}

.close-btn:hover {
    background-color: rgb(190, 183, 183);
}
</style>
