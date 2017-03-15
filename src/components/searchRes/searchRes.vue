<template>
  <div class="searchRes"  v-show="showFlag">
    <x-header>This is the page title.</x-header>
    <p>this is the result</p>
  </div>
</template>

<script>
import {XHeader} from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style>
  .searchRes
    margin-top 3rem
    margin-bottom 3rem 
    display: inline-block;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
</style>
