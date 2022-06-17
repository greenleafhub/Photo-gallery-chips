<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 1rem;
  max-width: 100rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

.text{
  text-align: center;
}
</style>

<template>

<div class="text">
<h1>🥔Chips🥔</h1>
<p>Welcome to my chips review gallery!<br>Click on the photo to read my reviews✨</p>
</div>

  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.code">
      <router-link :to="`/photo/${photo.code}`">       
        <img :src="thumbUrl(photo.code)" />
      </router-link>
    </div>
  </div>

  <div class="text">
    <router-link to @click="moveUp">Back to top</router-link>
  </div>
<br>

</template>

<script>
import photos from "@/chips after 2017.json";

export default {
  name: "VGallery",
  data() {
    return {
      search: "",
      photos,
    };
  },
  methods: {
    thumbUrl(code) {
      return require(`../assets/images/${code}.png`);
    },
     moveUp(){
           window.scrollTo(0,0);
      },
  },
};
</script>
