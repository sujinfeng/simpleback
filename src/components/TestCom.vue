<!-- testCom.vue -->
<template>
  <div class="test">
    <div :id="parent" ref='container'></div>
    <el-button class="login_btn" @click.native="loginout" type="primary" round>登出</el-button>
    <el-button class="login_btn" @click.native="testPost" type="primary" round>token传送测试</el-button>
  </div>
</template>
<script>
export default {
  name: 'com',
  props: {
    parent: {
      type: String,
      default: 'parent_noed'
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    loginout() {
      this.$store.commit('del_token');
      this.$router.replace({
        path: '/login' // 到登录页重新获取token
      })
    },
    testPost() {
      this.$http.fetchPost('/test', {}).then((data) => {
        console.log(data);
      }).catch(err => {
          console.log(err)
        }
      )
    }
  }
}
</script>
<style scoped lang="stylus">
.test
  position fixed
  top 0px
  left 0px
  background-color #2f5
  width 100px
  height 100px
#parent_noed
  width 20px
  height 20px
  background-color #f56
</style>
