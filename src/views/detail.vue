<template>
  <div class="detail">
    <banner :list="list"></banner>
    <div class="menu">
      <div>
        <a href="javascript:;" :class="{'active':menuID==0}" @click="swiperMenu(0)">活动详情</a>
        <!-- <router-link to="/activities" :class="{'active':menuID==0}" @click="swiperMenu(0)">活动详情</router-link> -->
      </div>
      <div>
        <a href="javascript:;" :class="{'active':menuID==1}" @click="swiperMenu(1)">评论</a>
        <!-- <router-link to="/comment" :class="{'active':menuID==1}" @click="swiperMenu(1)">活动详情</router-link> -->
      </div>
    </div>
    <div class="info">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import banner from "../components/banner";
import detailed from "../components/detailed";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      menuID: 0,
      list: []
    };
  },
  components: {
    banner,
    detailed
  },
  methods: {
    swiperMenu(index) {
      this.menuID = index;
      if (index == 0) {
        this.$router.replace("/detail/" + this.id + "/activities");
      } else {
        this.$router.replace("/detail/" + this.id + "/comment");
      }
      console.log(this.$route.params.uid);
    },
    swiperComment(val) {
      console.log(val);
    }
  },
  mounted() {
    console.log(this.$route.params.uid);

    this.id = this.$route.params.uid;
    this.list = [
      {
        img:
          "http://img2.imgtn.bdimg.com/it/u=320178652,790985626&fm=26&gp=0.jpg"
      },
      {
        img:
          "http://img4.imgtn.bdimg.com/it/u=218585976,2908101178&fm=26&gp=0.jpg"
      }
    ];
  }
};
</script>
<style scoped>
.detail {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
}
.menu {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-content: center;
}
.menu > div {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.menu > div a {
  display: inline-block;
  height: 100%;
  overflow: hidden;
  color: #888;
  font-size: 14px;
  text-decoration: none;
}
.menu > div a.active {
  color: orange;
  border-bottom: 1px solid orange;
}
.info {
  width: 100%;
  padding: 0px 15px;
  margin-top: 10px;
}
</style>
