<!--
 * @Author: your name
 * @Date: 2020-11-25 21:14:34
 * @LastEditTime: 2020-11-28 20:12:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/view/login.vue
-->
<template>
  <div class="login">
    <div class="top">
           <div class="logo"></div>
          <div class="box">
              <p class="enroll">注册</p>
              <div class="box-inline">
                <div class="input-block">
                    <p>昵称</p>
                    <div class="input">
                    <el-input v-model="input" placeholder="username"></el-input>  
                    </div>
                    <p>密码</p>
                    <div class="password">
                    <el-input v-model="password" show-password placeholder="passwrod"></el-input> 
                    </div> 
                </div>    
                <div class="input-block">
                    <p>邮箱</p>
                    <div class="input">
                    <el-input v-model="input" placeholder="username"></el-input>  
                    </div>
                    <p>确认密码</p>
                    <div class="password">
                    <el-input v-model="password" show-password placeholder="passwrod"></el-input> 
                    </div> 
                </div>               
              </div>
              <div class="login-button" @click="register">注册</div>
          </div> 
    </div>

      <div class="font-ctx">
        <p>已经有账号了？<a class="link" @click="login">马上登录 👉</a> </p>
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
      this.$router.push('/')
    },
    register(){
      this.$router.push('/')
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
    justify-content: space-between;
    flex-direction: column;
    background-color: #F4F6F9;
    .top{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .box-inline{
        display: flex;
    }
    .font-ctx{
      width: 30vw;
      height: 10vh;
      margin-bottom: 80px;
      .link{
        color: #03DAC5;
        font-weight: 500;
        cursor: pointer;
      }
      p:nth-child(1){
        margin-bottom: 50px;
      }
      p:nth-child(2),p:nth-child(3){
        font-size: 12px;
      }
    }
    .logo{
        width: 150px;
        height: 150px;
        margin-bottom: 50px;
        margin-top: 100px;
        border-radius: 50%;
        box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
        background-image: url('../assets/image/logo.png');
        background-size: cover;
    }
    .box{
        background-color: #FFFFFF;
        width: 50vw;
        min-width: 200px;
        height: 40vh;
        border-top: 2px solid #03DAC5;
        box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .input-block{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1vw;
        }
        .login-button{
          margin-bottom: 30px;
          width: 42vw;
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
            width: 42vw;
            text-align: left;
            color: #03DAC5;
            font-size: 24px;
            margin-top: 20px;
        }
        P{
            width: 20vw;
            text-align: left;
            height: 30px;
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