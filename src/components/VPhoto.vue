<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  .lightbox img {
    margin: auto 2rem auto 2rem;
    width: 100%;
    border-radius: 0.75rem;
  }
 

  .lightbox-info {
    margin: auto 2rem auto 2rem;
    font-size: 80%;

  }
 
 .lightbox-info-inner {
    background-color: rgba(255, 255, 255, 0.8);
    display: inline-block;
    padding: 2rem;
    border-radius: 0.75rem;
  }

 @media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .lightbox {
    display: table-column-group;   
    column-gap: 2rem;    
  }

 .lightbox img {
    margin: 1rem;
    width: 90%;
  }

.lightbox-info-inner {
   padding: 0.5rem;
   font-size: 90%;

  }

}


  
</style>


<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(photo.code)" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        
        <p v-if="photo.Name"><b>Name:</b> {{ photo.Name }}</p>
        <p v-if="photo.Taste"><b>Taste:</b>{{ photo.Taste }}</p>
        <p v-if="photo.Texture"><b>Texture:</b>{{ photo.Texture }}</p>
        <p v-if="photo.Size"><b>Size:</b>{{ photo.Size }}</p>
        <p v-if="photo.Overall"><b>Overall:</b>{{ photo.Overall }}</p>
        <p v-if="photo.Tags">{{ photo.Tags }}</p>

        <p v-if="photo.postURL">
          <a rel="nofollow" :href="photo.postURL" target="_blank">
            First posted to Instagram on {{ photo.date_posted }}
          </a>
        </p>
        </div>
    </div>
  </div>
</template>

<script>
import photos from "@/chips after 2017.json";

export default {
  name: "VuePhoto",
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.code === Number(this.$route.params.code);
      });
    },
  },
  methods: {
    photoUrl(code) {
      return require(`../assets/images/${code}.png`);
    },
    closeLightbox() {
  this.$router.push('/');
},
  },
};
</script>
