<template>
  <div class="detail">{{id}}</div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.params.uid;
    //console.log(this.$route.params.uid);
  }
};
</script>
<style scoped>
.detail {
  width: 100%;
  box-sizing: border-box;
}
</style>
