<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot></home-hot>
    <home-like></home-like>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"
import HomeHeader from './childComps/HomeHeader'
import HomeIcons  from './childComps/HomeIcons'
import HomeLocation from './childComps/HomeLocation'
import HomeActivity from './childComps/HomeActivity'
import HomeHot from './childComps/HomeHot'
import HomeLike from './childComps/HomeLike'

export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeLocation,
      HomeActivity,
      HomeHot,
      HomeLike
    }
}
</script>

<style scoped>

</style>
