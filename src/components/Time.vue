<template>
    <div class="time">
        <div class="top-side">
          已在此页面停留{{timeInterval}}s！
          <div class="logout" @click="logout()">退出</div>
        </div>
         请输入暗号：
          <input type="text" v-model="psd">
          <button @click="testAnhao()">确定</button>
          <div @click="gotoHello()">Go to hello!</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      timeInterval: 0,
      psd: ''
    }
  },
  created: function () {
    this.getTime()
  },
  methods: {
    getTime: function () {
      let self = this
      setInterval(() => {
        self.timeInterval++
      }, 1000)
    },
    testAnhao: function () {
      let self = this
      console.log(self.psd)
      if (this.psd.indexOf('我是二货') >= 0) {
        alert('暗号对接成功！')
      } else {
        alert('暗号错误！')
      }
    },
    gotoHello: function () {
      let self = this
      self.$router.push({path: '/hello'})
    },
    logout: function () {
      let self = this
      self.$router.push({path: '/login'})
    }
  }
}
</script>
<style>
  .time{width:100%;height:100%;}
  .top-side{
      width: 100%;
      height: 80px;
      background: #337ab7;
      color: #fff;
      line-height: 80px;
      overflow: hidden;
  }
  .logout{
    float: right;
    padding-right: 20px;
  }
</style>
