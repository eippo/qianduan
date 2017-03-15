<template>
<div class="srch" v-show="showSrch">
    <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" autoFixed top="46px" @on-focus="onFocus" placeholder="请输入关键字或者题号"></search>
    <group>
      <cell title="eippo"   is-link link="/searchRes" inline-desc="点击箭头跳转"></cell>
      <router-view></router-view>
      <cell title="eippo"   is-link :link="{path: '/test'}" inline-desc="暂时无效"></cell>
   <!-- <router-link to="/searchRes">go to</router-link> -->
    </group>
    <searchRes @click="selected" ref="searchRes">点击跳转</searchRes>
</div>
</template>

<script>
import Search from 'vux/src/components/search'
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import searchRes from '../searchRes/searchRes'

export default {
  components: {
    Search,
    Group,
    Cell,
    searchRes
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onFocus () {
      console.log('on focus')
    },
    selected () {
      if (!event._constructed) {
        return
      }
      this.showSrch = false
      this.$refs.searchRes.show()
    }
  },
  data () {
    return {
      results: [],
      value: 'test',
      showSrch: true
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
