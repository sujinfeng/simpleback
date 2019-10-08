<!-- login.vue -->
<template>
  <div class="login">
    <div >
      <div class="login-body ts-c">
        <el-input class="username" v-model="username" prefix-icon="el-icon-user" placeholder="请输入内容"></el-input>
        <el-input v-model="userpwd" type="password" prefix-icon="el-icon-key" placeholder="请输入内容"></el-input>
        <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
        <div ad ref="test"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      userpwd: '',
      isBtnLoading: false
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    submita() {
      this.$refs.test.innerHTML = this.username;
    },
    login() {
      if (!this.username) {
        this.$message.error('请输入用户名');
        return;
      }
      if (!this.userpwd) {
        this.$message.error('请输入密码');
        return;
      }
      let params = {
        'username': 'admin',
        'userpwd': 'admin123'
      }
      this.$http.fetchPost('/post', params).then((data) => {
        this.$store.commit('set_token', data.data.token)
        console.log(this.$store.state.token);
        if (this.$store.state.token) {
          this.$router.push('/')
          console.log(this.$store.state.token)
        } else {
          this.$router.replace('/login');
        }
      }).catch(err => {
          console.log(err)
        }
      )
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus">
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  -o-{prop} args
  {prop} args
box-sizing()
  vendor('box-sizing', arguments)
*
  box-sizing border-box
.login
  width 100vw
  height 100vh
.login>div
  height 100vh
  width 500px
  margin 0px auto
  background-color #9fa
  position relative
[ad]
  width 200px
  height 100px
.login-body
  height 40vh
  width 100%
  padding-top 10%
  padding-left 10%
  padding-right 10%
.userpwd
.username
  margin-bottom 10px
.login_btn
  width 100%
  margin-top 20px
  font-size 16px
  font-weight 900
  border none
  color #6cf
  background -webkit-linear-gradient(left, #000099, #2154FA) /* Safari 5.1 - 6.0 */
  background -o-linear-gradient(right, #000099, #2154FA) /* Opera 11.1 - 12.0 */
  background -moz-linear-gradient(right, #000099, #2154FA) /* Firefox 3.6 - 15 */
  background linear-gradient(to right, #000099 , #2154FA)
  filter brightness(1.4);
</style>

