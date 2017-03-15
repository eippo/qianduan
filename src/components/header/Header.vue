<template>
<div>
  <x-header  style="background-color:#32CD32" :left-options="{showBack: false}">{{tag}}</x-header>
</div>
</template>
<style>

</style>
<script>
  import XHeader from 'vux/src/components/x-header'

  export default{
    name: 'AppHeader',
    data () {
      return {
        tag: '题库'
      }
    },
    components: {
      XHeader
    }
  }
</script>
