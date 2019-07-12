<template>
  <div class="banner">
    <div class="banner-swiper">
      <swiper :options="options">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img :src="item.img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  data() {
    return {
      options: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          loop: true
        },

        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
        },
        observer: true,
        observeParents: true,
        roundLengths: true
      }
    };
  },
  props: {
    list: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {}
};
</script>
<style scoped>
.banner {
  width: 100%;
  background: #f0f0f0;
  height: 200px;
}
.banner .banner-swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.banner .banner-swiper img {
  width: 100%;
  height: 200px;
}
</style>