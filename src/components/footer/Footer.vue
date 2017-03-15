<template>
  <tabbar>
    <tabbar-item selected>
    <span slot="label">题库</span>
    </tabbar-item>

    <tabbar-item>
    <span slot="label">课堂</span>
    </tabbar-item>

    <tabbar-item>
    <span slot="label">商城</span>
    </tabbar-item>
    
    <tabbar-item>
    <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<style>
  .add{
    height:40px;
    width:40px;
  }
</style>
<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default{
    name: 'AppFooter',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        msg: ''
      }
    }
  }

</script>
