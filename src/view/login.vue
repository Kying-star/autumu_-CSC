<!--
 * @Author: your name
 * @Date: 2020-11-25 21:14:34
 * @LastEditTime: 2020-11-26 11:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/view/login.vue
-->
<template>
  <div class="login">
      <div class="box">
          <div class="input">
             <p>用户名</p> 
            <el-input v-model="input" placeholder="username"></el-input>  
          </div>
          <div class="password">
             <p>密码</p>
             <el-input v-model="password" show-password placeholder="passwrod"></el-input> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      password: '',
    }
  },
  created(){
      console.log(window.screen.width)
      console.log(window.screen.height);
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
    .box{
        background-color: #FFFFFF;
        width: 30vw;
        min-width: 200px;
        height: 40vh;
        border-top: 2px solid #03DAC5;
        box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .input, .password{
            width: 25vw;
            height: 60px;
        }
    }
}
</style>