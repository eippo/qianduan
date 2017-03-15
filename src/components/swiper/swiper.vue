<template>
  <div class="diypage-banner">
   <swiper>
      <swiper-item  class="swiper-demo-img" v-for="advs in advIndex">
        <img :src="advs.imgurl">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import search from '../search/search'
import {Swiper, SwiperItem} from 'vux'

export default {
  data () {
    return {
      advIndex: [
        {
          imgurl: '../../static/image/actionbar_search_icon1.jpg'
        },
        {
          imgurl: '../../static/image/ic_label_today.jpg'
        },
        {
          imgurl: 'http://file06.16sucai.com/2016/0222/17714c3b51079911760e5ef7fdb553f6.jpg'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>

<style>
.diypage-banner
  .swiper-demo-img
    img
      width: 50px;
      height: 100%;
</style>
