<template>
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="index">
      <router-link :to="'/detail/'+index+'/activities'">
        <div class="item-img">
          <img :src="item.img" />
        </div>
        <div class="item-right">
          <h3 class="title">{{item.title}}</h3>
          <p class="info">{{item.customer}}</p>
          <p class="info">{{item.address}}</p>
          <p class="info">{{item.date}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.list {
  width: 100%;

  box-sizing: border-box;
}
.item {
  width: 100%;
  height: 120px;
  padding: 10px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
}
.item a {
  display: flex;
  width: 100%;
  height: 100%;
  color: #666;
  text-decoration: none;
}
.item a .item-img {
  width: 100px;
  height: 100%;
}
.item a .item-img img {
  width: 100%;
  height: 100%;
}
.item a .item-right {
  flex: 1;
  overflow: hidden;
  padding-left: 5px;
}
.title {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0;
}
.info {
  height: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
</style>
