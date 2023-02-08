<template>
    <div>
        <div class="photo-container" v-if="loaded">
            <div class="photo-wrap" v-for="photo in photos" :key="photo">
                <img :src="photo" alt="Image" :style="{ maxWidth: photoMaxWidth, height: photoHeight }">
            </div>
        </div>
        <div class="btn-container">
            <button class="prev-btn"  @click="prevPage">Previous</button>
            <button class="next-btn" @click="nextPage">Next</button>
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
            loaded: false,
            pageNumber: 1,
            numberPerPage: 2
        };
    },
    mounted() {
        this.createPhotosArray()
        this.loaded = true
    },
    methods: {
        async createPhotosArray() {
            this.photos = []

            let photoExists = true;
            let index
            if (this.pageNumber === 1) {
                index = 1
            } else {
                index = (((this.pageNumber-1) * this.numberPerPage) + 1)
            }
            console.log('index: ' + index)
            let count = 0
            while (photoExists && count < this.numberPerPage) {
                let imgUrl = new URL(`../../assets/${this.folder}/${this.folder}_photo_${index}.png`, import.meta.url).href
                console.log(imgUrl)
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
    position:absolute;
    bottom:0;   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.prev-btn, .next-btn {
    color: white;
    background: #f1592a;
    margin: 5px;
    padding: 10px;
    min-width: 100px;
}

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
