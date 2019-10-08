<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
  #app {
    height: 100%;
    position: relative
  }

  .content-box {
    position: absolute;
    left: 13%;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: rgba(252, 252, 255, 1);
  }

  .content {
    width: auto;
    height: 100vh;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  .content-collapse {
    left: 65px;
  }

  .container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .el-button--primary {
    color: #fff;
    background-color: rgba(64, 158, 255, 0.8) !important;
    border-color: rgba(64, 158, 255, 0.8) !important;
  }


  /*红色* 必填项*/
  b.require {
    color: #FF0000;
  }

  #app .input-error:after {
    content: "*请输入有效合法的内容！";
    color: #FF0000;
  }

  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 60% !important;
  }


  /*  .el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover  {
        outline: 0;
        background-color: #ecf5ff!important;
      }*/
  .vercolor {
    color: red;
  }
  #app .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 180px;
  }
</style>
