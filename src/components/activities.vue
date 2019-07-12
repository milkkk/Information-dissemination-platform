<template>
  <div class="activities">
    <div class="title">
      <p class="activities-title">标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
      <p class="count">浏览次数</p>
    </div>
    <div class="activities-info">
      <p>
        <span>商户：</span>
      </p>
      <p>
        <span>地址：</span>
      </p>
      <p>
        <span>时间：</span>
      </p>
      <p>
        <span>标签：</span>
      </p>
    </div>
    <div class="activities-content"></div>
  </div>
</template>
<script>
export default {
  name: "Activities"
};
</script>
<style scoped>
.activities {
  width: 100%;
}
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.activities .activities-title {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
}
.activities .count {
  height: 20px;
  font-size: 12px;
  margin: 0;
  padding: 0;
  line-height: 20px;
  margin-top: 10px;
}
.activities-info {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.activities-info p {
  margin: 0;
  padding: 0;
  margin-top: 10px;
  font-size: 14px;
}
.activities-info p span {
  color: orange;
}
.activities-content {
  width: 100%;
  padding-top: 10px;
}
</style>