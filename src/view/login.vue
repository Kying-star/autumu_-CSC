<!--
 * @Author: your name
 * @Date: 2020-11-25 21:14:34
 * @LastEditTime: 2020-11-28 19:39:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/view/login.vue
-->
<template>
  <div class="login">
      <div class="logo"></div>
      <div class="box">
          <p class="enroll">登录</p>
          <div class="input-block">
            <p>用户名</p>
            <div class="input">
              <el-input v-model="input" placeholder="username"></el-input>  
            </div>
            <p>密码</p>
            <div class="password">
              <el-input v-model="password" show-password placeholder="passwrod"></el-input> 
            </div> 
          </div>
          <div class="login-button" @click="login">登录</div>
      </div>
  </div>
</template>

<script>
//import {register} from '../server/index'
export default {
  data() {
    return {
      input: '',
      password: '',
    }
  },
  created(){
      console.log(window.screen.width)
      console.log(window.screen.height)
  },
  methods:{
    login(){
      //register(this.input,this.password)
      this.$router.push('/index')
    }
  }
}
</script>


<style lang="scss" scoped>
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F4F6F9;
    .logo{
        width: 150px;
        height: 150px;
        margin-bottom: 50px;
        border-radius: 50%;
        box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
        background-image: url('../assets/image/logo.png');
        background-size: cover;
    }
    .box{
        background-color: #FFFFFF;
        width: 25vw;
        min-width: 200px;
        height: 40vh;
        border-top: 2px solid #03DAC5;
        box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 150px;
        .login-button{
          margin-bottom: 30px;
          width: 20vw;
          height: 50px;
          border-radius: 5px;
          background-color: #08ecd6;
          transition: all .5s linear;
          cursor: pointer;
          line-height: 50px;
          font-weight: 600;
          color: #FFFFFF;
          box-shadow: rgba(0,0,0,.2)  0 1px 2px 0px;
          &:hover{
            background-color: #03DAC5;
          }
        }
        .enroll{
            width: 20vw;
            text-align: left;
            color: #03DAC5;
            font-size: 24px;
            margin-top: 20px;
        }
        P{
            width: 20vw;
            text-align: left;
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }
        .input, .password{
            width: 20vw;
            height: 60px;
        }
    }
}
</style>