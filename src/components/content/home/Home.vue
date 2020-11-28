<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"
import HomeHeader from './childComps/HomeHeader'

export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper
    }
}
</script>

<style scoped>

</style>
