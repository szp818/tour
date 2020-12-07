<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"
import HomeHeader from './childComps/HomeHeader'
import HomeIcons  from './childComps/HomeIcons'
import HomeLocation from './childComps/HomeLocation'
import HomeActivity from './childComps/HomeActivity'

export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeLocation,
      HomeActivity
    }
}
</script>

<style scoped>

</style>
