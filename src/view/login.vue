<!--
 * @Author: your name
 * @Date: 2020-11-25 21:14:34
 * @LastEditTime: 2020-11-30 16:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/view/login.vue
-->
<template>
  <div class="login">
    <div class="top">
      <div class="logo"></div>
      <div class="box">
        <p class="enroll">登录</p>
        <div class="input-block">
          <p>用户名</p>
          <div class="input">
            <el-input
              v-model="input"
              placeholder="username"
            ></el-input>
          </div>
          <p>密码</p>
          <div class="password">
            <el-input
              v-model="password"
              show-password
              placeholder="passwrod"
            ></el-input>
          </div>
        </div>
        <div
          class="login-button"
          @click="login"
        >登录</div>
      </div>
    </div>

    <div class="font-ctx">
      <p>还没有账号？<a
          class="link"
          @click="register"
        >马上注册 👉</a> </p>
      <p>Copyright © 2020 kying-star</p>
      <p>Powered by <a class="link">kying-star</a> Theme by <a class="link">ElementUI</a></p>
    </div>
  </div>
</template>

<script>
//import {register} from '../server/index'
export default {
  data() {
    return {
      input: "",
      password: "",
    };
  },
  created() {
    console.log(window.screen.width);
    console.log(window.screen.height);
    this.username = localStorage.getItem("username");
  },
  methods: {
    login() {
      //register(this.input,this.password)
      if (
        this.password == localStorage.getItem("password") &&
        this.input == localStorage.getItem("username")
      ) {
        this.$message({
          message: "登录成功",
          type: "success",
        });
        this.$router.push("/index");
      } else {
        this.$message.error("密码或用户名错误");
      }
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>


<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f4f6f9;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .font-ctx {
    width: 30vw;
    height: 10vh;
    margin-bottom: 80px;
    .link {
      color: #03dac5;
      font-weight: 500;
      cursor: pointer;
    }
    p:nth-child(1) {
      margin-bottom: 50px;
    }
    p:nth-child(2),
    p:nth-child(3) {
      font-size: 12px;
    }
  }
  .logo {
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
    margin-top: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
    background-image: url("../assets/image/logo.png");
    background-size: cover;
  }
  .box {
    background-color: #ffffff;
    width: 25vw;
    min-width: 200px;
    height: 40vh;
    border-top: 2px solid #03dac5;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .input-block {
      display: flex;
      flex-direction: column;
    }
    .login-button {
      margin-bottom: 30px;
      width: 20vw;
      height: 50px;
      border-radius: 5px;
      background-color: #08ecd6;
      transition: all 0.5s linear;
      cursor: pointer;
      line-height: 50px;
      font-weight: 600;
      color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0px;
      &:hover {
        background-color: #03dac5;
      }
    }
    .enroll {
      width: 20vw;
      text-align: left;
      color: #03dac5;
      font-size: 24px;
      margin-top: 20px;
    }
    P {
      width: 20vw;
      text-align: left;
      height: 30px;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
    }
    .input,
    .password {
      width: 20vw;
      height: 60px;
    }
  }
}
</style>