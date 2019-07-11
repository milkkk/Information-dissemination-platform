<template>
  <div class="login">
    <InputGroup
      v-model="phone"
      type="Number"
      placeholder="手机号"
      :btnText="btnText"
      :disabled="disabled"
      :error="error.phone"
      :value="phone"
      style="margin-top:15px;"
      @btnClick="verification"
    ></InputGroup>
    <InputGroup
      v-model="code"
      type="Number"
      placeholder="验证码"
      style="margin-top:15px;"
      :error="error.code"
    ></InputGroup>
    <div class="login_btn">
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
export default {
  name: "Login",
  data() {
    return {
      disabled: false,
      btnText: "获取验证码",
      error: {},
      phone: "",
      code: "",
      sendCode: ""
    };
  },
  methods: {
    verification() {
      if (!this.isPhone()) {
        //this.error.phone = "手机号码输入有误";
        console.log(this.phone);
        this.error = {
          phone: "手机号码输入有误"
        };
        return false;
      } else {
        //获取验证码
        this.getCode();
        this.error = {};
        this.disabled = true;
        var time = 60;
        this.btnText = time + "秒后重新获取";
        var timer = setInterval(() => {
          if (time == 0) {
            this.btnText = "获取验证码";
            this.disabled = false;
            clearInterval(timer);
            return false;
          }
          time--;
          this.btnText = time + "秒后重新获取";
        }, 1000);
      }
    },
    isPhone() {
      if (/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)) {
        return true;
      } else {
        return false;
      }
    },
    getCode() {
      this.sendCode = Math.floor(Math.random() * 999999);
      console.log(this.sendCode);
      this.axios
        .get(
          "http://v.juhe.cn/sms/send?mobile=" +
            this.phone +
            "&tpl_id=172023&tpl_value=%23code%23%3d" +
            this.sendCode +
            "&key=ad490e0bb0318c225d1c03492ff010c6"
        )
        .then(result => {
          console.log(1);
          console.log(result);
        })
        .catch(err => {
          console.log(2);
          console.log(err);
        });
    },
    login() {
      if (this.code == "") {
        this.error = {
          code: "验证码不能为空"
        };
        return false;
      } else {
        if (this.code == this.sendCode) {
          this.error = {};
          localStorage.isLogin = true;
          this.$router.push("/index");
        } else {
          this.error = {
            code: "验证码错误"
          };
        }
      }
    }
  },
  components: {
    InputGroup
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 60px 15px 0px 15px;
  box-sizing: border-box;
  font-size: 14px;
  background: #f0f0f0;
}
.login_btn {
  width: 100%;
  margin-top: 40px;
}
.login_btn button {
  width: 100%;
  background: #5bda73;
  height: 40px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 4px;
}
</style>
