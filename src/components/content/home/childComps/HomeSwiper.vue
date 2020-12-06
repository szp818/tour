<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperlist" :key="item.id">
        <img :src="item.url"  alt="">
       </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperlist:[
        {
          id:'1',
          url:require('assets/img/swiper/lb1.jpg')
        },
        {
          id:'2',
          url:require('assets/img/swiper/lb2.jpg')
        },
        {
          id:'3',
          url:require('assets/img/swiper/lb3.jpg')
        },
        {
          id:'4',
          url:require('assets/img/swiper/lb4.jpg')
        },
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop:true
      }
    }
  },   
}
</script>

<style scoped>
  .header-swiper{
    width:100%;
    height: 160px;
  }

  .header-swiper img{
    width: 100%;
    height: 100%;
  }

  .header-swiper >>> .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
