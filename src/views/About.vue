<template>
  <div class="about">
    <testcom/>
    <router-view></router-view>
  </div>
</template>

<script>
import testcom from '@/components/TestCom'

export default {
  name: 'home',
  data() {
    return {
      amapNode: 'container'
    }
  },
  components: {
    testcom
  }
}
</script>

<style scoped lang="stylus">
</style>

