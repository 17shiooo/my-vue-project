<template>
  <div class="login">
    <img src="../assets/logo.png">
    <ul>
      <li v-for="item in lists" v:key="item">{{item}}</li>
    </ul>
    <input type="text" v-model="loginBody.username" name="username">
    <input type="password" v-model="loginBody.password" name="password">
    <button type="button" @click="toLogin()">登陆</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      loginBody: {
        username: '',
        password: ''
      },
      lists: [333, 222, 2223, 114]
    }
  },
  methods: {
    toLogin: function () {
      let self = this
      console.log(self.loginBody)
      self.$router.push({path: '/time'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 600px;
    margin: 0 auto;
  }
  .login > img{
      display: block;
      margin:100px auto;
  }
  .login>input,.login>button{
      height: 40px;
      margin: 0 10px;
      padding: 0 10px;
  }
  .login>input{
      width: 200px;
  }
</style>
