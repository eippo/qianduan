<template>
  <div id="app">
  <app-header></app-header>
    <srch></srch>
    <!-- <searchRes></searchRes> -->
    <!-- <my-loading :show="isLoading"></my-loading> -->
    <!-- <transition>
      <router-view  v-wechat-title="$route.meta.title" keep-alive></router-view>
    </transition> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/header/Header'
import srch from './components/srch/srch'
// import searchRes from './components/searchRes/searchRes'
// import MyLoading from './components/loading/loading'
import AppFooter from './components/footer/Footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    srch,
    // searchRes
    // MyLoading
    AppFooter
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
