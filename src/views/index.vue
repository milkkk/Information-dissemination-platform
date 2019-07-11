<template>
  <div class="index">
    <div class="header">
      <search></search>
      <div class="menu">
        <div v-for="(item,index) in menu" :key="index" class="item">
          <a href="javascript:;" :class="{'active':index==key}" @click="reloadList(index)">{{item}}</a>
        </div>
      </div>
    </div>
    <section class="list">
      <InfoList :list="list"></InfoList>
    </section>
  </div>
</template>
<script>
import search from "../components/search.vue";
import InfoList from "../components/InfoList.vue";
export default {
  name: "Index",
  data() {
    return {
      menu: ["显示全部", "购物中心", "餐饮美食", "生活服务"],
      key: 0,
      list: []
    };
  },
  methods: {
    getList() {
      for (var i = 0; i < 20; i++) {
        this.list.push({
          img:
            "http://img2.imgtn.bdimg.com/it/u=320178652,790985626&fm=26&gp=0.jpg",
          title: "标题",
          customer: "商户",
          address: "地址",
          date: "时间"
        });
      }
    },
    reloadList(index) {
      this.list = [];
      this.key = index;
      this.getList();
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var bodyHeight = document.body.clientHeight;
      var documentHeight = document.body.scrollHeight;
      if (scrollTop + bodyHeight + 20 > documentHeight) {
        setTimeout(() => {
          this.getList();
        }, 3000);
      }
    }
  },
  components: {
    search,
    InfoList
  },
  mounted() {
    this.getList();
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
.index {
  background: #888;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
}
.index .header {
  background: #888;
  padding: 10px 15px;
  padding-top: 30px;
}
.index .header .menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 30px;
  line-height: 30px;
  border-top: 1px solid #fff;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
}
.index .header .menu .item {
  flex: 1;
  text-align: center;
}
.index .header .menu .item a {
  font-size: 12px;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  height: 100%;
}
.index .header .menu .item a.active {
  color: orange;
  border-bottom: 1px solid orange;
}
.index section {
  padding: 0px 15px;
  background: #f0f0f0;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
