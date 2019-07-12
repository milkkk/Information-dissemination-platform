<template>
  <div class="detailed">
    <swiper :options="options">
      <swiper-slide>
        <div class="container">
          <h3>标题</h3>
          <p class="count">浏览次数：</p>
          <div class="text">
            <p>商户：</p>
            <p>地址：</p>
            <p>时间：</p>
            <p>标签：</p>
          </div>
          <div class="content">
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="container">1123</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Detailed",
  data() {
    return {
      options: {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        roundLengths: true,
        on: {
          slideChangeTransitionStart: obj => {
            console.log(this);
          }
        }
      },
      that: this
    };
  },
  methods: {
    swiperComment() {}
  },
  mounted() {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.detailed {
  width: 100%;
  background: #fff;
}
.container {
  padding: 0px 15px;
}
.container h3 {
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  overflow: hidden;
}
.count {
  font-size: 12px;
  margin-top: 5px;
}
.text {
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.text p {
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
}
</style>
