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
</style>

<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.code">
      <router-link :to="`/photo/${photo.code}`">       
        <img :src="thumbUrl(photo.code)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/chips after 2017.json";

export default {
  name: "VGallery",
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(code) {
      return require(`../assets/images/${code}.png`);
    },
  },
};
</script>
