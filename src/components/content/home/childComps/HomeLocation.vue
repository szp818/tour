<template>
  <div class="home-location border-top">
    <div class="home-location-item border-right">
      <span class="iconfont">&#xe608;</span>
      定位失败
    </div>
     <div class="home-location-item">
      <span class="iconfont">&#xe602;</span>
      必游榜单
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeLocation'
}
</script>

<style>
  .home-location{
    display: flex;
    position: relative;
    border-bottom: 10px solid #f5f5f5 ;
  }
  .home-location-item{
    flex: 1;
    font-size:  14px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>