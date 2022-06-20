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

input[type=text] {
  width: 250px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: 'Cabin', sans-serif;
  font-size: large;
}
</style>

<template>
<div class="text">
<h1>🥔Chips🥔</h1>
<p>Welcome to my chips review gallery!<br>Click on the photo to read my reviews✨</p>
</div>

<div class="text">
    Search by tags: <input type="text" v-model="searchWords" placeholder="🔎try typing 'nice' here"><i class="fa fa-search"></i>
    
</div>
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in filterSearch" :key="photo.code">
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
      photos,  searchWords: ''
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
  computed:{
    filterSearch() {   
    return this.photos.filter(searchResult => {
    searchResult.Tags = ""+searchResult.Tags      
    return searchResult.Tags.includes(this.searchWords)});
  }
  },
};
</script>
