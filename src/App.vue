<template>
  <div id="app">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.gotoLogin()
  },
  methods: {
    gotoLogin: function () {
      let self = this
      self.$router.push({path: '/login'})
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
