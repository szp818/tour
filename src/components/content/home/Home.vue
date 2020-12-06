<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"
import HomeHeader from './childComps/HomeHeader'
import HomeIcons  from './childComps/HomeIcons'

export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons
    }
}
</script>

<style scoped>

</style>
