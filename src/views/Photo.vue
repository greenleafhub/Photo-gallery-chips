<template>
<div>
  <VGallery />
  <VuePhoto />
</div>
</template>

<script>
import VuePhoto from "@/components/VPhoto.vue";
import VGallery from '@/components/VGallery.vue';

export default {
  name: "VueHome",
  components: {
    VuePhoto,
    VGallery,
  },
};
</script>
