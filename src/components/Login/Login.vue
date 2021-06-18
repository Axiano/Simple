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
      <el-form :model="loginForm"
               :rules="loginFormRules"
               ref="loginFormref"
               label-width="100px"
               class="inputBox">
        <el-form-item prop="username"
                      class="inputs">
          <el-input v-model="loginForm.username"
                    class="inputStyle"
                    placeholder="输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      class="inputs">
          <el-input v-model="loginForm.password"
                    class="inputStyle"
                    placeholder="请输入密码"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item class="formbtnitem">
          <el-button class="formbtn"
                     plain
                     @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入账号！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码！', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    successmessage () {
      this.$notify({
        title: '登录成功',
        type: 'success',
        showClose: false
      })
    },
    nosuccessmessage () {
      this.$notify.error({
        title: '登录失败',
        showClose: false
      })
    },
    login () {
      this.$refs.loginFormref.validate(async valid => {
        console.log(this.$http.post)
        if (!valid) return
        const { data: res } = await this.$http.post('http://api.axian.fun/api/login', this.loginForm)

        if (res.status !== 0) {
          return this.nosuccessmessage()
        }
        this.successmessage()
        window.sessionStorage.setItem('token', res.token)
        this.$router.push('/index')
      })
    }
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
.loginBoxH1 {
  margin: 20px 0;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}

.inputStyle {
  margin: 0 auto;
  width: 240px;
}
.inputs {
  margin: 20px auto;
  width: 240px;
}
.formbtnitem {
  width: 240px;
  margin: 0 auto;
}
.formbtn {
  margin-left: 50%;
  transform: translate(-50%, 0);
}
</style>
