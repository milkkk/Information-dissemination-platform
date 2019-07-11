<template>
  <div class="input-group">
    <div class="input">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input',$event.target.value)"
      />
      <button v-if="btnText" @click="$emit('btnClick')" :disabled="disabled">{{btnText}}</button>
    </div>
    <p v-if="error" class="error">{{error}}</p>
  </div>
</template>
<script>
export default {
  name: "InputGroup",
  props: {
    type: {
      type: String,
      defatult: "text"
    },
    placeholder: String,
    value: String,
    btnText: String,
    error: String,
    disabled: Boolean
  }
};
</script>
<style scoped>
.input-group {
  width: 100%;
}
.input {
  width: 100%;
  position: relative;
}
.input input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
  padding-left: 5px;
  box-sizing: border-box;
  -webkit-appearance: none;
}
.input input:focus {
  border: 1px solid #2cb5ee;
}
.input input::placeholder {
  color: #aaa;
  letter-spacing: 1px;
}
.input button {
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  right: 0;
  top: 0;
  outline: none;
  padding: 0px 5px;
  color: #aaa;
}
.error {
  font-size: 12px;
  color: #f00;
  margin-top: 5px;
}
</style>
