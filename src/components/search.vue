<template>
  <div class="search">
    <input type="text" placeholder="search..." />
    <button>search</button>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>
<style scoped>
.search {
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
}
.search input {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 10px;
  font-size: 14px;
  box-sizing: border-box;
}
.search button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0px 10px;
  border: none;
  outline: none;
  height: 40px;
  background: #f0f0f0;
  font-size: 12px;
  border-radius: 4px;
}
</style>