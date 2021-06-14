<template>
  <div>
    <router-link to="/blog">
      <h1>
        返回博客
      </h1>
    </router-link>
    <div class="loginBox">
      <div class="loginBoxH1">
        🦸‍♂️欢迎登录
      </div>
      <a-form-model>
        <a-form-model-item class="inputs">
          <a-input placeholder="输入用户名"
                   class="inputStyle" />
        </a-form-model-item>
        <a-form-model-item class="inputs">
          <a-input placeholder="输入密码"
                   class="inputStyle" />
        </a-form-model-item>
        <a-form-model-item class="btnlogin">
          <a-button>登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .loginBox {
    width: 80% !important;
  }
}
@media screen and (min-width: 501px) {
}
@media screen and (max-width: 900px) {
  .loginBox {
    width: 70% !important;
  }
}
@media screen and (min-width: 901px) {
}
.loginBox {
  position: relative;
  top: 100px;
  margin: 0 auto;
  padding: 20px 0;
  width: 600px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 7px 12px 0 rgb(0 0 0 / 20%);
}
.inputs {
  width: 240px;
  margin: 0 auto;
}
.inputStyle {
  margin: 10px 0;
  width: 240px;
}
.loginBoxH1 {
  margin: 20px 0;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}
.btnlogin {
  width: 100px;
  margin: 20px auto;
}
</style>
